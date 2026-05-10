from PIL import Image
import numpy as np

def remove_background(image_path, out_path, tolerance=30):
    img = Image.open(image_path).convert("RGBA")
    data = np.array(img)
    
    # Get the background color from top-left pixel
    bg_color = data[0, 0]
    
    # Calculate distance of all pixels from bg_color
    r, g, b, a = data[:,:,0].astype(np.float32), data[:,:,1].astype(np.float32), data[:,:,2].astype(np.float32), data[:,:,3].astype(np.float32)
    bg_r, bg_g, bg_b = float(bg_color[0]), float(bg_color[1]), float(bg_color[2])
    
    dist = np.sqrt((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)
    
    # Create an alpha mask based on distance (soft edge)
    # The farther from bg_color, the more opaque
    # If dist is close to 0, alpha is 0
    alpha = np.clip(dist * (255.0 / tolerance), 0, 255).astype(np.uint8)
    
    # We shouldn't just replace the background with black or white.
    # The actual colors are fine, we just want to update the alpha channel.
    data[:,:,3] = np.where(dist < tolerance, alpha, data[:,:,3])
    
    out_img = Image.fromarray(data)
    out_img.save(out_path)

if __name__ == '__main__':
    logo_path = r'c:\Users\benhi\OneDrive\Bureau\Clinique\public\logo.png'
    print(f"Removing background from {logo_path}")
    remove_background(logo_path, logo_path, tolerance=40)
    print("Done!")
