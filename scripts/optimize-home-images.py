"""Regenerate home page WebP assets: python3 scripts/optimize-home-images.py.

Requires Pillow (python3 -m pip install Pillow).
Original images remain available for other pages.
"""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1] / "public" / "Homepage"
images = [root / "announcements_bg.jpg", root / "accredition.jpg", root / "world_map.png"]
images.extend(sorted((root / "why").glob("*.jpg")))
images.extend(sorted((root / "campuses").glob("*.jpg")))
for path in images:
    with Image.open(path) as image:
        image.thumbnail((1600, 1000))
        output = path.with_suffix(".webp")
        image.save(output, "WEBP", quality=78, method=6)
        print(f"{output.name}: {path.stat().st_size:,} → {output.stat().st_size:,} bytes")
