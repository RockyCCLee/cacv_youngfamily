/**
 * This file contains the data for the CACV Caleb Fellowship materials.
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
        title: "Calendar and Activities",
        description: "Fellowship calendar and scheduled activities.",
        url: "https://docs.google.com/spreadsheets/d/1RXUL4R6O6BroA73F9p2eljo-_rLz2kHcpl1TWMNmM7c/edit?usp=drive_link",
        icon: "calendar"
    },
    {
        title: "Fellowship Rundown",
        description: "Fellowship run-sheets, duty rosters, and meeting schedules.",
        url: "https://docs.google.com/spreadsheets/d/1iAWY4VYA61DI6Cto1oonnLb-nmBEurh00gkUQs1MTo4/edit?usp=drive_link",
        icon: "clock"
    },
    {
        title: "Guidelines",
        description: "Approaches, procedures, and communication channels.",
        icon: "book-open",
        subItems: [
            {
                title: "Communication Channels",
                url: "https://docs.google.com/spreadsheets/d/1BfUAVXClGqz22qelY-ea8cWeKs0piw2u1CYqUVuxulk/edit?usp=drive_link",
                icon: "chats-circle"
            },
            {
                title: "Pre-Bible Study Approach",
                url: "https://docs.google.com/document/d/1tacYKn391bLSiRqHlG00WWgi4alvUAOPbHCfp48SeCg/edit?usp=drive_link",
                icon: "book-bookmark"
            }
        ]
    },
    {
        title: "Member Database",
        description: "Member records and database directory.",
        url: "https://docs.google.com/spreadsheets/d/1-Ju3_pKX2zrdT_knhSZtzTwyARyyQ8ox24rE2JS--MM/edit?gid=0#gid=0",
        icon: "database"
    }
];
