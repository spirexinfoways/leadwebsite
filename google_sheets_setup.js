// 1. Go to your existing Google Sheet ("Spirex Leads")
// 2. Go to menu: Extensions > Apps Script
// 3. Delete all the old code and paste this NEW code below:

const sheetName = 'Leads';

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = doc.getSheetByName(sheetName);

        // Parse the JSON data sent from React
        const data = JSON.parse(e.postData.contents);

        const nextRow = sheet.getLastRow() + 1;

        // We will ignore headers and just paste data directly in order:
        // Column A: Timestamp
        // Column B: Business Name
        // Column C: Category
        // Column D: Mobile
        const newRow = [
            new Date(),
            data.businessName || "Unknown",
            data.category || "Unknown",
            data.mobile || "Unknown"
        ];

        // Append to the next available row
        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
            .setMimeType(ContentService.MimeType.JSON);
    }
    catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    }
    finally {
        lock.releaseLock();
    }
}

// 4. Click the 'Save' icon (Ctrl+S).
// 5. Click 'Deploy' > 'New deployment'.
// 6. Select 'Web app' (if not already selected).
// 7. Settings: Execute as: Me, Who has access: Anyone
// 8. Click 'Deploy'.
// 9. COPY the NEW 'Web app URL' it gives you!
// 10. Paste the NEW URL into `src/features/leadForm/leadService.js`.
