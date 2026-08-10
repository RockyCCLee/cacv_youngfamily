/**
 * This file contains the data for the Young Family Fellowship materials.
 * Since Google Drive cannot be automatically scraped for its contents via static HTML,
 * you can manually maintain the categories and links here.
 * 
 * To add a new category:
 * 1. Copy an existing block `{ title: "...", description: "...", url: "...", icon: "..." }`
 * 2. Paste it into the array below, separated by a comma.
 * 3. Update the title, description, and Google Drive URL.
 * 
 * Icon names are from Phosphor Icons (https://phosphoricons.com/).
 * Use the name without the "ph-" prefix (e.g., "folder", "users", "calendar").
 */

const categoriesData = [
    {
        title: "Planning and Action Table",
        description: "Master planning document and action items.",
        url: "https://docs.google.com/spreadsheets/d/1enJms3HOvZKA06RSscX5rCwpq1KcSYTS79QKJwUkv9A/edit?usp=drive_link",
        icon: "table"
    },
    {
        title: "Group List",
        description: "Current list of members and groups.",
        url: "https://docs.google.com/spreadsheets/d/1Pr7Xu8q5vDBJi_SmJdSG3N0G1H_kaGA71XnTRZLlBLc/edit?usp=drive_link",
        icon: "users"
    },
    {
        title: "Rundown and Activities",
        description: "Event rundowns and scheduled activities.",
        url: "https://docs.google.com/spreadsheets/d/1RXUL4R6O6BroA73F9p2eljo-_rLz2kHcpl1TWMNmM7c/edit?usp=drive_link",
        icon: "list-checks"
    }
];
