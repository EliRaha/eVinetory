<!DOCTYPE HTML>
<html>

<head>
	<meta charset="UTF-8" />
</head>

<body>
	<?php
	require("dataconf.php");
	require("config.php");
	$page = 1;
	$nombreProduit = 96; //48 ou 96	
	//$maxpage = 57; // nombre pour vins rouges
	$maxpage = 34; // nombre pour vins blanc

	//$maxpage = 1;
	
	$saq = new SAQ();
	for ($i = 0; $i < $maxpage; $i++) //permet d'importer séquentiellement plusieurs pages.
	{
		echo "<h2>page " . ($page + $i) . "</h2>";
		$nombre = $saq->getProduits($nombreProduit, $page + $i);
		echo "importation : " . $nombre . "<br>";
	}
	?>
</body>

</html>