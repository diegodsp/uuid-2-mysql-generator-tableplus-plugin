'use strict';

var onRun = function (context) {
    // Get all the items
    var row = context.clickedRow();
    var col = context.clickedColumn();
    var item = context.currentItem();

    if (row == null || col == null || item == null) {
        context.alert('Error', 'No item cliked');
        return;
    }

    // generate uuid
    var uuid = "x'" + ('xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16).toUpperCase();
    })) + "'";
    if (uuid == null) {
        context.alert('Error', 'Could not generate UUID');
        return;
    }

    // Make sure the constant is nil
    row.setConstant(col.name, '');

    // Update row value
    row.update(col.name, uuid);

    // Add to update queue
    item.addUpdate(row);

    // Notify the change
    context.update();
};

global.onRun = onRun;