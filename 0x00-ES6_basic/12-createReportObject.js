export default function createReportObject(employeesList) {
    return {
        allEmployess: employessList,
        getNumberOfDepartments(employeesList) {
            return Object.keys(employeesList).length;
        },
    };
}