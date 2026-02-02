from PIL import Image
import os

images = ['home.jpg', 'home2.jpg', 'home3.jpg']
max_width = 1920

for img_name in images:
    if os.path.exists(img_name):
        try:
            with Image.open(img_name) as img:
                # Calculate new height to maintain aspect ratio
                if img.size[0] > max_width:
                    width_percent = (max_width / float(img.size[0]))
                    h_size = int((float(img.size[1]) * float(width_percent)))
                    img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                    print(f"Resized {img_name} to {max_width}x{h_size}")
                else:
                    print(f"Skipping resize for {img_name} (width: {img.size[0]})")
                
                # Save with optimization
                img.save(img_name, "JPEG", quality=80, optimize=True)
                print(f"Optimized {img_name}")
        except Exception as e:
            print(f"Failed to process {img_name}: {e}")
    else:
        print(f"{img_name} not found")
