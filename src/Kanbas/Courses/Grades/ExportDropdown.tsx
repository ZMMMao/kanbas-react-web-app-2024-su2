import { Dropdown } from 'react-bootstrap';
import { LuFileOutput } from 'react-icons/lu';

export default function ExportDropdown() {
  return (
    <Dropdown className="float-end me-1">
      <Dropdown.Toggle id="wd-export-grade-dropdown" className="btn btn-lg btn-secondary">
        <LuFileOutput className="me-2" />
        Export
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Grades</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
