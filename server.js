const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;
const DATABASE_FILE = path.join(__dirname, "database.json");

// ================= MIDDLEWARE =================

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ملفات الواجهة
app.use(express.static(path.join(__dirname, "public")));

// ================= DATABASE =================

function readDatabase() {
    try {
        if (!fs.existsSync(DATABASE_FILE)) {
            const database = {
                users: [],
                doctors: [],
                patients: [],
                appointments: [],
                specialties: [],
                notifications: []
            };

            fs.writeFileSync(
                DATABASE_FILE,
                JSON.stringify(database, null, 2)
            );

            return database;
        }

        const data = fs.readFileSync(
            DATABASE_FILE,
            "utf8"
        );

        return JSON.parse(data);

    } catch (error) {

        console.error("Database error:", error);

        return {
            users: [],
            doctors: [],
            patients: [],
            appointments: [],
            specialties: [],
            notifications: []
        };
    }
}

function saveDatabase(database) {

    fs.writeFileSync(
        DATABASE_FILE,
        JSON.stringify(database, null, 2)
    );

}

// ================= HOME =================

app.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );

});

// ================= API STATUS =================

app.get("/api/status", (req, res) => {

    res.json({
        success: true,
        app: "TABIBK",
        name: "طبيبي",
        version: "1.0.0",
        message: "TABIBK API تعمل بنجاح"
    });

});

// ================= START SERVER =================

app.listen(PORT, () => {

    console.log(
        `TABIBK server running on port ${PORT}`
    );

});
