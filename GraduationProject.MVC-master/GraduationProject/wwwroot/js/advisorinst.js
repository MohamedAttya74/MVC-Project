let maxRows = { "Instructor": 6, "Assistant": 15 };

function updateRowCount() {
    let role = document.getElementById("Role").value;
    let currentRows = document.querySelectorAll("#scheduleBody tr").length;
    let warningMessage = document.getElementById("warningMessage");

    if (currentRows >= maxRows[role]) {
        warningMessage.textContent = `Maximum ${maxRows[role]} rows allowed for ${role}!`;
        return false;
    } else {
        warningMessage.textContent = "";
        return true;
    }
}
var coursesOptions = JSON.parse(document.getElementById("coursesData").textContent);
//console.log(coursesOptions);
var placesOptions = JSON.parse(document.getElementById("placesData").textContent);
function addRow() {
    if (!updateRowCount()) return; // Prevent adding rows if limit is reached
    
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>
                            <select name="Days[]" class="form-control">
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                            </select>
                        </td>
                        <td>
                            <select name="CourseIds[]" class="form-control">
                                <option value="">Select Course</option>
                                ${getOptions(coursesOptions)}
                            </select>
                        </td>
                        <td>
                            <select name="PlaceIds[]" class="form-control">
                            
                                <option value="">Select Place</option>
                                ${getOptions(placesOptions)}
                            </select>
                        </td>
                        <td>
                            <select name="TimeBegins[]" class="timeBegin form-control">
                                <option value="09:00:00.0000000">09:00</option>
                                <option value="10:20:00.0000000">10:20</option>
                                <option value="11:40:00.0000000">11:40</option>
                                <option value="13:00:00.0000000">13:00</option>
                                <option value="14:20:00.0000000">14:20</option>
                            </select>
                        </td>
                        <td>
                            <select name="TimeEnds[]" class="timeEnd form-control">
                                <option value="10:15:00.0000000">10:15</option>
                                <option value="11:35:00.0000000">11:35</option>
                                <option value="12:55:00.0000000">12:55</option>
                                <option value="14:15:00.0000000">14:15</option>
                                <option value="15:35:00.0000000">15:35</option>
                            </select>
                        </td>
                        <td>
                            <button type="button" class="btn btn-danger" onclick="removeRow(this)">
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
    `;
    document.getElementById("scheduleBody").appendChild(row);
    updateRowCount();
}

function removeRow(button) {
    button.closest("tr").remove();
    updateRowCount();
}
function getOptions(items) {
    return items.map(item => `<option value="${item.value}">${item.text}</option>`).join('');
}
