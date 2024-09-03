<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Display</title>
</head>
<body>
    <h1>Hands-on Activity</h1>
    <?php
        # Define the table header
        $headers = array(
            "StudentID",
            "Firstname",
            "Middlename",
            "Lastname",
            "Section",
            "Course",
            "Yearlevel"
        );

        # Create a template for the rows with static placeholders
        $rowTemplate = array(
            "firstname" => "Firstname",
            "middlename" => "Middlename",
            "lastname" => "Lastname",
            "section" => "Section",
            "course" => "Course",
            "yearlevel" => "Yearlevel",
        );

        # Number of rows you want to generate
        $numRows = 10;

        # Generate rows with static data and unique StudentID
        $rows = [];
        foreach (range(1, $numRows) as $index) {
            $rows[] = array(
                "firstname" => $rowTemplate["firstname"],
                "middlename" => $rowTemplate["middlename"],
                "lastname" => $rowTemplate["lastname"],
                "section" => $rowTemplate["section"],
                "course" => $rowTemplate["course"],
                "yearlevel" => $rowTemplate["yearlevel"],
            );
        }
    ?>
    <table border="1">
        <thead>
            <tr>
                <?php foreach ($headers as $header): ?>
                    <th><?php echo htmlspecialchars($header); ?></th>
                <?php endforeach; ?>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($rows as $index => $row): ?>
                <tr>
                    <td><?php echo $index + 1; ?></td>
                    <td><?php echo htmlspecialchars($row["firstname"]); ?></td>
                    <td><?php echo htmlspecialchars($row["middlename"]); ?></td>
                    <td><?php echo htmlspecialchars($row["lastname"]); ?></td>
                    <td><?php echo htmlspecialchars($row["section"]); ?></td>
                    <td><?php echo htmlspecialchars($row["course"]); ?></td>
                    <td><?php echo htmlspecialchars($row["yearlevel"]); ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html> 