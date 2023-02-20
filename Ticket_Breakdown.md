# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: Allow Facilities to save custom ids for Agents

Description: This ticket aims to enable Facilitis to save their custom ids for Agents in the database, which they can use while generating reports. This will require adding a new column to the Agents table in the database, which will store the custom ids assigned by Facilities. The custom ids will also need to be validated to ensure they're unique, as each Agent can have only one custom id assigned to them.

Acceptance Criteria: A new column is added to the Agents table in the database, which can store custom ids assigned by Facilities.
The custom ids entered by Facilities are validated to ensure they're unique.
Each Agent can have only one custom id assigned to them.
The system should be able to handle the scenario where a Facility has not assigned a custom id to an Agent.

Effort Estimate: This ticket can be completed in about 3-5 hours, depending on the complexity of the validation logic required.

Implementation Details: Add a new column to the Agents table in the database to store custom ids.
Write validation logic to ensure custom ids are unique and can be assigned to only one Agent.
Modify the user interface to enable Facilities to input custom ids for Agents.


Ticket 2: Update the Agent Ids in the Report Generation Process

Description: This ticket aims to update the report generation process to use the custom ids assigned by Facilities, instead of the internal database ids. This will require modifying the generateReport function to fetch the custom ids from the database and include them in the report.

Acceptance Criteria: The generateReport function is updated to fetch custom ids from the database instead of internal database ids.
Custom ids are included in the generated reports.

Effort Estimate: This ticket can be completed in about 2-4 hours, depending on the complexity of the report generation process.

Implementation Details: Modify the generateReport function to fetch custom ids from the Agents table.
Replace the internal database ids with custom ids in the report generation process.
Note: If required, additional tickets can be created to implement a validation process for custom ids entered by Facilities or to update existing reports with custom ids. However, the two tickets outlined above should suffice to achieve the desired outcome.


Ticket 3: Add Custom Ids to Agent Profile Page

Description: This ticket aims to add the ability for Facilities to view and edit custom ids for Agents on their profile page. This will require modifying the UI to display the custom ids, and adding the ability to edit them. Additionally, validation logic will need to be implemented to ensure custom ids entered by Facilities are unique.

Acceptance Criteria: Custom ids are displayed on the Agent profile page.
Facilities can edit custom ids assigned to an Agent.
Custom ids entered by Facilities are validated to ensure they're unique.

Effort Estimate: This ticket can be completed in about 4-6 hours, depending on the complexity of the validation logic required.

Implementation Details: Modify the UI to display custom ids on the Agent profile page.
Add the ability for Facilities to edit custom ids.
Write validation logic to ensure custom ids are unique.


Ticket 4: Update Report Generation Function to Allow Custom Date Range

Description: This ticket aims to update the report generation function to allow Facilities to generate reports for custom date ranges, instead of only the current quarter. This will require modifying the getShiftsByFacility function to accept a start and end date, and updating the report generation function to use the custom date range.

Acceptance Criteria: The getShiftsByFacility function is modified to accept a start and end date.
The report generation function is updated to use the custom date range.

Effort Estimate: This ticket can be completed in about 3-5 hours, depending on the complexity of the modifications required.

Implementation Details: Modify the getShiftsByFacility function to accept a start and end date.
Update the report generation function to use the custom date range provided.


Ticket 5: Add Export Functionality to Reports

Description: This ticket aims to add the ability for Facilities to export generated reports in different file formats such as CSV or Excel, in addition to the current PDF format. This will require modifying the report generation function to support exporting data in multiple file formats, and updating the UI to allow Facilities to select the desired file format.

Acceptance Criteria: The report generation function is modified to support exporting data in multiple file formats.
The UI is updated to allow Facilities to select the desired file format for the report.
Effort Estimate: This ticket can be completed in about 5-7 hours, depending on the complexity of the modifications required.

Implementation Details: Modify the report generation function to support exporting data in multiple file formats.
Update the UI to allow Facilities to select the desired file format for the report.