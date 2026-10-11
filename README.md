# CACV Caleb Fellowship Portal

A beautiful, static HTML portal designed for the CACV Caleb Fellowship. This portal provides a central, highly aesthetic dashboard for committees and coordinators to access materials stored in Google Drive.

## 🚀 How to Edit the Links

Since Google Drive requires users to be logged in and uses JavaScript to render, the files cannot be automatically extracted into a static website. 

To manage your links, you only need to edit one file: **`data.js`**.

1. Open `data.js` in any text editor.
2. You will see a list of categories inside `categoriesData`.
3. To change a link, simply replace the `url` value with your actual Google Drive subfolder or file link.
4. To add a new category, copy an existing block, add a comma, and paste it.

Example:
```javascript
{
    title: "New Category Name",
    description: "A short description of what is inside.",
    url: "https://drive.google.com/...", // <- Paste your link here
    icon: "folder" // Change the icon if you like
}
```

### 🎨 Icons
The site uses [Phosphor Icons](https://phosphoricons.com/). To change an icon, find an icon on their website, copy its name (e.g., `calendar`), and update the `icon` field in `data.js`.

## 🌐 How to Host on GitHub Pages

1. **Commit and Push:** Commit all these files (`index.html`, `style.css`, `script.js`, `data.js`) to your GitHub repository.
2. **Enable GitHub Pages:**
   - Go to your repository on GitHub.
   - Click on **Settings** > **Pages** (on the left sidebar).
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Select the `main` or `master` branch and the `/ (root)` folder.
   - Click **Save**.
3. After a few minutes, your site will be live at `https://[your-username].github.io/[repo-name]/`.

## 🔗 Portal URLs (Role-Based Access)

Committees and Coordinators can access the portal via their respective dedicated URLs:

- **Committee URL (Warm Peach Theme, All 6 Icons):**
  - `https://rockycclee.github.io/cacv_youngfamily/`
  - *(Or explicitly: `https://rockycclee.github.io/cacv_youngfamily/?role=committee`)*

- **Coordinator URL (Ocean Blue Theme, 4 Filtered Icons):**
  - `https://rockycclee.github.io/cacv_youngfamily/coordinator.html`
  - *(Or query parameter: `https://rockycclee.github.io/cacv_youngfamily/?role=coordinator`)*

Both views include a toggle button so users can easily switch views on the fly, with the URL automatically syncing in the address bar.

## 🎨 Design Notes

- Built with Vanilla HTML, CSS, and JS (No heavy frameworks required).
- Dynamic role switcher with active status indicators.
- **Committee Theme:** Warm and welcoming (Orange/Peach/Yellow palette).
- **Coordinator Theme:** Clean and modern (Ocean/Royal Blue palette).
- Uses modern CSS techniques: **Glassmorphism**, **CSS Variables**, and **Micro-animations**.
- Fully responsive on mobile and desktop.
