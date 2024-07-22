import { LuFileInput } from "react-icons/lu";
import ExportDropdown from './ExportDropdown';
import { FaFilter } from 'react-icons/fa';
import { IoSettingsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
export default function Grades() {
    return (
        <div id="wd-css-styling-tables">
            <div className="mb-3">
                <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <IoSettingsSharp/>
                </button>
                <ExportDropdown />
                <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <LuFileInput className="me-2" />
                Import
                </button>
            </div><br /><br />
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="studentName" className="form-label"><b>Student Names</b></label>
                <select className="form-select">
                <option selected>Search Students</option>
                <option value="1">Jane</option>
                <option value="2">Chris</option>
                <option value="3">Han</option>
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="assignmentNames" className="form-label"><b>Assignment Names</b></label>
                <select className="form-select">
                <option selected>Search Assignments</option>
                <option value="1">A1</option>
                <option value="2">A2</option>
                <option value="3">A3</option>
                </select>
              </div>
            </div><br />
            <button className="btn btn-lg btn-secondary me-1" type="button">
              <FaFilter /> Apply Filters
            </button>
            <br /><br />
            
            <table className="table table-bordered">
                <thead>
                    <tr className="table">
                        <th>Student Name</th>            
                        <th>A1 SETUP<br /><small>Out of 100</small></th>
                        <th>A2 HTML<br /><small>Out of 100</small></th>
                        <th>A3 CSS<br /><small>Out of 100</small></th>
                        <th>A4 BOOTSTRAP<br /><small>Out of 100</small></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table"><td>Jane Adams</td><td>100%</td><td>99%</td><td>85%</td><td>85%</td></tr>
                    <tr className="table"><td>Christina Allen</td><td>100%</td><td>100%</td><td>100%</td><td>90%</td></tr>
                </tbody>
            </table>
        </div>
    );
}
