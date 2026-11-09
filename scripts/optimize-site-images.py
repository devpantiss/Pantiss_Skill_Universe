"""Create WebP copies of local images referenced by the site (requires Pillow).
Run before updating source paths. Originals are retained for rollback.
"""
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
sources = list((ROOT / 'src').rglob('*.tsx')) + list((ROOT / 'src').rglob('*.css'))
texts = {p: p.read_text() for p in sources}
all_text = '\n'.join(texts.values())
manifest_path = ROOT / 'docs' / 'site-image-manifest.json'
manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
for asset in sorted((ROOT / 'public').rglob('*')):
    if not asset.is_file() or 'optimized' in asset.parts or asset.suffix.lower() not in {'.jpg', '.jpeg', '.png', '.webp'}:
        continue
    url = '/' + asset.relative_to(ROOT / 'public').as_posix()
    if (url not in all_text and manifest.get(url, {}).get('url', '__not_referenced__') not in all_text) or asset.stat().st_size < 120_000:
        continue
    target = ROOT / 'public' / 'optimized' / (asset.relative_to(ROOT / 'public').as_posix() + '.webp')
    target.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(asset) as original:
        image = ImageOps.exif_transpose(original)
        image.thumbnail((1600, 1200))
        if image.mode not in ('RGB', 'RGBA'): image = image.convert('RGBA')
        image.save(target, 'WEBP', quality=78, method=5)
    if target.stat().st_size >= asset.stat().st_size:
        target.unlink()
        continue
    manifest[url] = {'url': '/' + target.relative_to(ROOT / 'public').as_posix(), 'before': asset.stat().st_size, 'after': target.stat().st_size}
for path, original_text in texts.items():
    text = original_text
    for old, item in manifest.items(): text = text.replace(old, item['url'])
    if text != original_text: path.write_text(text)
(ROOT / 'docs' / 'site-image-manifest.json').write_text(json.dumps(manifest, indent=2) + '\n')
print(json.dumps({'images': len(manifest), 'before': sum(x['before'] for x in manifest.values()), 'after': sum(x['after'] for x in manifest.values())}))
