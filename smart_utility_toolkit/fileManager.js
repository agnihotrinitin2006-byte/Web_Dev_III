const fs = require("fs");

const fileName = "test.txt";

// CREATE
console.log("Creating File...");

fs.writeFile(fileName, "Hello Node.js\n", (err) => {
    if (err) {
        console.log("Error creating file:", err.message);
        return;
    }

    console.log("File Created");

    // READ
    console.log("Reading File...");

    fs.readFile(fileName, "utf8", (err, data) => {
        if (err) {
            console.log("Error reading file:", err.message);
            return;
        }

        console.log(data);

        // UPDATE
        console.log("Updating File...");

        fs.appendFile(fileName, "Learning FS Module\n", (err) => {
            if (err) {
                console.log("Error updating file:", err.message);
                return;
            }

            console.log("File Updated");

            // READ UPDATED FILE
            fs.readFile(fileName, "utf8", (err, updatedData) => {
                if (err) {
                    console.log("Error reading updated file:", err.message);
                    return;
                }

                console.log(updatedData);

                // DELETE
                console.log("Deleting File...");

                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.log("Error deleting file:", err.message);
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});