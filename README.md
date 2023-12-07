# Feller Smart Home Icons for Home Assistant

![Feller Icon Header](header.jpg)

This project brings icons by [Feller](https://www.feller.ch) to Home Assistant.

Feller is  Switzerland's biggest provider of light switches, wall sockets and electrical equipment.
They provide an icon set for their product line used for all their products and also usable for
custom labeling of switches, etc.

Icons are identified by number, so you can for example use `feller:1409` for the lightbulb icon.
A list of icons can be found [here](https://webcache.brandmaker.com/314_1685116696676.original.html).
If the Link doesn't work, you should find the download [here](https://online-katalog.feller.ch/download/index.php?menueidLev1=280).

**Note:** This project is not affiliated with Feller the company, but is a community driven effort
to bring Feller icons to Home Assistant.

## Installation
The best way to install is using HACS (Home Assistand Community Store).
1. Ensure HACS is already installed on Home Assistant https://hacs.xyz/docs/installation/prerequisites/
2. In Home Assistant, navigate to `HACS → Frontend`
3. Select the 3 dots icon in the top right and choose **Custom repositories**
4. Add this repository `https://github.com/syonix/ha-feller-icons`
5. **Feller Smart Home Icons** should be shown as a new repository available to install. Click **Install** twice
6. Click **Reload** to confirm

### Manual installation
1. Copy `dist/ha-feller-icons.js` to the `/config/www` directory of your
2. Make sure you have **Advanced Mode** enabled in your user profile
3. Navigate to `Settings → Dashboard` and press the three dots in the upper right corner and click **Resources**
4. Click **Add Resource**
5. Enter the URL `/local/ha-feller-icons.js`, choose resource type **JavaScript module** and click **Create**.
6. Restart Home Assistant

### Optional - Sitewide availability
By default the icons can only be used inside Lovelace dashbaords. To use the icons site wide, add the following to the `Frontend` sections of your Home Assistant `configuration.yaml`:

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/ha-feller-icons/ha-feller-icons.js
```

You may need to refresh your browser a couple of times for the icons to be shown the first time.

## Icons


### Actions

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/aktionen/1460.svg) | `1460`| ![Preview](/svg/aktionen/1485.svg) | `1485`| ![Preview](/svg/aktionen/1651.svg) | `1651`| ![Preview](/svg/aktionen/1652.svg) | `1652` |
| ![Preview](/svg/aktionen/1653.svg) | `1653`| ![Preview](/svg/aktionen/1654.svg) | `1654`| ![Preview](/svg/aktionen/1655.svg) | `1655`| ![Preview](/svg/aktionen/1674.svg) | `1674` |
| ![Preview](/svg/aktionen/1747.svg) | `1747`| ![Preview](/svg/aktionen/1748.svg) | `1748`| ![Preview](/svg/aktionen/1749.svg) | `1749`| ![Preview](/svg/aktionen/1750.svg) | `1750` |
| ![Preview](/svg/aktionen/1753.svg) | `1753`| ![Preview](/svg/aktionen/1755.svg) | `1755`| ![Preview](/svg/aktionen/1794.svg) | `1794`| ![Preview](/svg/aktionen/1795.svg) | `1795` |
| ![Preview](/svg/aktionen/1818.svg) | `1818`| ![Preview](/svg/aktionen/1911.svg) | `1911`| ![Preview](/svg/aktionen/1917.svg) | `1917`| ![Preview](/svg/aktionen/1920.svg) | `1920` |
| ![Preview](/svg/aktionen/1924.svg) | `1924`| ![Preview](/svg/aktionen/1957.svg) | `1957`| ![Preview](/svg/aktionen/1958.svg) | `1958`| ![Preview](/svg/aktionen/1973.svg) | `1973` |
| ![Preview](/svg/aktionen/2068.svg) | `2068`


### On / off

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/ein-aus/1403.svg) | `1403`| ![Preview](/svg/ein-aus/1404.svg) | `1404`| ![Preview](/svg/ein-aus/1415.svg) | `1415`| ![Preview](/svg/ein-aus/1416.svg) | `1416` |
| ![Preview](/svg/ein-aus/1417.svg) | `1417`| ![Preview](/svg/ein-aus/1486.svg) | `1486`| ![Preview](/svg/ein-aus/1492.svg) | `1492`| ![Preview](/svg/ein-aus/1493.svg) | `1493` |
| ![Preview](/svg/ein-aus/1604.svg) | `1604`| ![Preview](/svg/ein-aus/1675.svg) | `1675`| ![Preview](/svg/ein-aus/1678.svg) | `1678`| ![Preview](/svg/ein-aus/1966.svg) | `1966` |



### Climate

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/klima/1414.svg) | `1414`| ![Preview](/svg/klima/1458.svg) | `1458`| ![Preview](/svg/klima/1459.svg) | `1459`| ![Preview](/svg/klima/1462.svg) | `1462` |
| ![Preview](/svg/klima/1463.svg) | `1463`| ![Preview](/svg/klima/1464.svg) | `1464`| ![Preview](/svg/klima/1482.svg) | `1482`| ![Preview](/svg/klima/1487.svg) | `1487` |
| ![Preview](/svg/klima/1488.svg) | `1488`| ![Preview](/svg/klima/1490.svg) | `1490`| ![Preview](/svg/klima/1491.svg) | `1491`| ![Preview](/svg/klima/1498.svg) | `1498` |
| ![Preview](/svg/klima/1499.svg) | `1499`| ![Preview](/svg/klima/1613.svg) | `1613`| ![Preview](/svg/klima/1614.svg) | `1614`| ![Preview](/svg/klima/1615.svg) | `1615` |
| ![Preview](/svg/klima/1679.svg) | `1679`| ![Preview](/svg/klima/1746.svg) | `1746`| ![Preview](/svg/klima/1792.svg) | `1792`| ![Preview](/svg/klima/1793.svg) | `1793` |
| ![Preview](/svg/klima/1860.svg) | `1860`| ![Preview](/svg/klima/1861.svg) | `1861`| ![Preview](/svg/klima/1862.svg) | `1862`| ![Preview](/svg/klima/1863.svg) | `1863` |
| ![Preview](/svg/klima/1864.svg) | `1864`| ![Preview](/svg/klima/1869.svg) | `1869`| ![Preview](/svg/klima/1870.svg) | `1870`| ![Preview](/svg/klima/1904.svg) | `1904` |
| ![Preview](/svg/klima/1906.svg) | `1906`| ![Preview](/svg/klima/1929.svg) | `1929`| ![Preview](/svg/klima/1930.svg) | `1930`| ![Preview](/svg/klima/1931.svg) | `1931` |
| ![Preview](/svg/klima/2150.svg) | `2150`| ![Preview](/svg/klima/2151.svg) | `2151`


### Light

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/licht/1409.svg) | `1409`| ![Preview](/svg/licht/1410.svg) | `1410`| ![Preview](/svg/licht/1411.svg) | `1411`| ![Preview](/svg/licht/1412.svg) | `1412` |
| ![Preview](/svg/licht/1413.svg) | `1413`| ![Preview](/svg/licht/1422.svg) | `1422`| ![Preview](/svg/licht/1423.svg) | `1423`| ![Preview](/svg/licht/1424.svg) | `1424` |
| ![Preview](/svg/licht/1425.svg) | `1425`| ![Preview](/svg/licht/1426.svg) | `1426`| ![Preview](/svg/licht/1427.svg) | `1427`| ![Preview](/svg/licht/1428.svg) | `1428` |
| ![Preview](/svg/licht/1429.svg) | `1429`| ![Preview](/svg/licht/1430.svg) | `1430`| ![Preview](/svg/licht/1431.svg) | `1431`| ![Preview](/svg/licht/1605.svg) | `1605` |
| ![Preview](/svg/licht/1606.svg) | `1606`| ![Preview](/svg/licht/1607.svg) | `1607`| ![Preview](/svg/licht/1676.svg) | `1676`| ![Preview](/svg/licht/1788.svg) | `1788` |
| ![Preview](/svg/licht/1789.svg) | `1789`| ![Preview](/svg/licht/1790.svg) | `1790`| ![Preview](/svg/licht/1791.svg) | `1791`| ![Preview](/svg/licht/2067.svg) | `2067` |
| ![Preview](/svg/licht/2109.svg) | `2109`


### Multimedia

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/multimedia/1405.svg) | `1405`| ![Preview](/svg/multimedia/1406.svg) | `1406`| ![Preview](/svg/multimedia/1455.svg) | `1455`| ![Preview](/svg/multimedia/1456.svg) | `1456` |
| ![Preview](/svg/multimedia/1457.svg) | `1457`| ![Preview](/svg/multimedia/1461.svg) | `1461`| ![Preview](/svg/multimedia/1477.svg) | `1477`| ![Preview](/svg/multimedia/1478.svg) | `1478` |
| ![Preview](/svg/multimedia/1480.svg) | `1480`| ![Preview](/svg/multimedia/1481.svg) | `1481`| ![Preview](/svg/multimedia/1686.svg) | `1686`| ![Preview](/svg/multimedia/1687.svg) | `1687` |
| ![Preview](/svg/multimedia/1688.svg) | `1688`| ![Preview](/svg/multimedia/1689.svg) | `1689`| ![Preview](/svg/multimedia/1744.svg) | `1744`| ![Preview](/svg/multimedia/1745.svg) | `1745` |
| ![Preview](/svg/multimedia/1925.svg) | `1925`| ![Preview](/svg/multimedia/1928.svg) | `1928`


### Arrows

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/pfeile/1407.svg) | `1407`| ![Preview](/svg/pfeile/1408.svg) | `1408`| ![Preview](/svg/pfeile/1432.svg) | `1432`| ![Preview](/svg/pfeile/1433.svg) | `1433` |
| ![Preview](/svg/pfeile/1434.svg) | `1434`| ![Preview](/svg/pfeile/1435.svg) | `1435`| ![Preview](/svg/pfeile/1436.svg) | `1436`| ![Preview](/svg/pfeile/1437.svg) | `1437` |
| ![Preview](/svg/pfeile/1438.svg) | `1438`| ![Preview](/svg/pfeile/1439.svg) | `1439`| ![Preview](/svg/pfeile/1440.svg) | `1440`| ![Preview](/svg/pfeile/1441.svg) | `1441` |
| ![Preview](/svg/pfeile/1442.svg) | `1442`| ![Preview](/svg/pfeile/1443.svg) | `1443`| ![Preview](/svg/pfeile/1444.svg) | `1444`| ![Preview](/svg/pfeile/1445.svg) | `1445` |
| ![Preview](/svg/pfeile/1446.svg) | `1446`| ![Preview](/svg/pfeile/1447.svg) | `1447`| ![Preview](/svg/pfeile/1448.svg) | `1448`| ![Preview](/svg/pfeile/1449.svg) | `1449` |
| ![Preview](/svg/pfeile/1450.svg) | `1450`| ![Preview](/svg/pfeile/1451.svg) | `1451`| ![Preview](/svg/pfeile/1452.svg) | `1452`| ![Preview](/svg/pfeile/1453.svg) | `1453` |
| ![Preview](/svg/pfeile/1454.svg) | `1454`| ![Preview](/svg/pfeile/1616.svg) | `1616`| ![Preview](/svg/pfeile/1617.svg) | `1617`| ![Preview](/svg/pfeile/1618.svg) | `1618` |
| ![Preview](/svg/pfeile/1619.svg) | `1619`| ![Preview](/svg/pfeile/1620.svg) | `1620`| ![Preview](/svg/pfeile/1621.svg) | `1621`| ![Preview](/svg/pfeile/1622.svg) | `1622` |
| ![Preview](/svg/pfeile/1623.svg) | `1623`| ![Preview](/svg/pfeile/1670.svg) | `1670`| ![Preview](/svg/pfeile/1671.svg) | `1671`| ![Preview](/svg/pfeile/1970.svg) | `1970` |



### Rooms

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/raeume/1476.svg) | `1476`| ![Preview](/svg/raeume/1479.svg) | `1479`| ![Preview](/svg/raeume/1624.svg) | `1624`| ![Preview](/svg/raeume/1625.svg) | `1625` |
| ![Preview](/svg/raeume/1626.svg) | `1626`| ![Preview](/svg/raeume/1627.svg) | `1627`| ![Preview](/svg/raeume/1628.svg) | `1628`| ![Preview](/svg/raeume/1629.svg) | `1629` |
| ![Preview](/svg/raeume/1630.svg) | `1630`| ![Preview](/svg/raeume/1631.svg) | `1631`| ![Preview](/svg/raeume/1632.svg) | `1632`| ![Preview](/svg/raeume/1633.svg) | `1633` |
| ![Preview](/svg/raeume/1634.svg) | `1634`| ![Preview](/svg/raeume/1635.svg) | `1635`| ![Preview](/svg/raeume/1636.svg) | `1636`| ![Preview](/svg/raeume/1637.svg) | `1637` |
| ![Preview](/svg/raeume/1638.svg) | `1638`| ![Preview](/svg/raeume/1639.svg) | `1639`| ![Preview](/svg/raeume/1641.svg) | `1641`| ![Preview](/svg/raeume/1642.svg) | `1642` |
| ![Preview](/svg/raeume/1643.svg) | `1643`| ![Preview](/svg/raeume/1644.svg) | `1644`| ![Preview](/svg/raeume/1645.svg) | `1645`| ![Preview](/svg/raeume/1646.svg) | `1646` |
| ![Preview](/svg/raeume/1647.svg) | `1647`| ![Preview](/svg/raeume/1960.svg) | `1960`| ![Preview](/svg/raeume/1999.svg) | `1999`


### System

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/system/1656.svg) | `1656`| ![Preview](/svg/system/1657.svg) | `1657`| ![Preview](/svg/system/1658.svg) | `1658`| ![Preview](/svg/system/1659.svg) | `1659` |
| ![Preview](/svg/system/1660.svg) | `1660`| ![Preview](/svg/system/1661.svg) | `1661`| ![Preview](/svg/system/1662.svg) | `1662`| ![Preview](/svg/system/1663.svg) | `1663` |
| ![Preview](/svg/system/1664.svg) | `1664`| ![Preview](/svg/system/1665.svg) | `1665`| ![Preview](/svg/system/1666.svg) | `1666`| ![Preview](/svg/system/1667.svg) | `1667` |
| ![Preview](/svg/system/1668.svg) | `1668`| ![Preview](/svg/system/1669.svg) | `1669`| ![Preview](/svg/system/1672.svg) | `1672`| ![Preview](/svg/system/1673.svg) | `1673` |
| ![Preview](/svg/system/1918.svg) | `1918`| ![Preview](/svg/system/1919.svg) | `1919`| ![Preview](/svg/system/1921.svg) | `1921`| ![Preview](/svg/system/1926.svg) | `1926` |
| ![Preview](/svg/system/1927.svg) | `1927`| ![Preview](/svg/system/1932.svg) | `1932`| ![Preview](/svg/system/1961.svg) | `1961`| ![Preview](/svg/system/1964.svg) | `1964` |
| ![Preview](/svg/system/1977.svg) | `1977`


### Scenes

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/szenen/1418.svg) | `1418`| ![Preview](/svg/szenen/1419.svg) | `1419`| ![Preview](/svg/szenen/1420.svg) | `1420`| ![Preview](/svg/szenen/1421.svg) | `1421` |
| ![Preview](/svg/szenen/1489.svg) | `1489`| ![Preview](/svg/szenen/1494.svg) | `1494`| ![Preview](/svg/szenen/1495.svg) | `1495`| ![Preview](/svg/szenen/1496.svg) | `1496` |
| ![Preview](/svg/szenen/1497.svg) | `1497`| ![Preview](/svg/szenen/1600.svg) | `1600`| ![Preview](/svg/szenen/1601.svg) | `1601`| ![Preview](/svg/szenen/1602.svg) | `1602` |
| ![Preview](/svg/szenen/1603.svg) | `1603`| ![Preview](/svg/szenen/1608.svg) | `1608`| ![Preview](/svg/szenen/1609.svg) | `1609`| ![Preview](/svg/szenen/1610.svg) | `1610` |
| ![Preview](/svg/szenen/1611.svg) | `1611`| ![Preview](/svg/szenen/1612.svg) | `1612`| ![Preview](/svg/szenen/1640.svg) | `1640`| ![Preview](/svg/szenen/1677.svg) | `1677` |
| ![Preview](/svg/szenen/1690.svg) | `1690`| ![Preview](/svg/szenen/1691.svg) | `1691`| ![Preview](/svg/szenen/1692.svg) | `1692`| ![Preview](/svg/szenen/1693.svg) | `1693` |
| ![Preview](/svg/szenen/1694.svg) | `1694`| ![Preview](/svg/szenen/1698.svg) | `1698`| ![Preview](/svg/szenen/1741.svg) | `1741`| ![Preview](/svg/szenen/1742.svg) | `1742` |
| ![Preview](/svg/szenen/1743.svg) | `1743`| ![Preview](/svg/szenen/1940.svg) | `1940`| ![Preview](/svg/szenen/1941.svg) | `1941`| ![Preview](/svg/szenen/1942.svg) | `1942` |
| ![Preview](/svg/szenen/1943.svg) | `1943`| ![Preview](/svg/szenen/1944.svg) | `1944`| ![Preview](/svg/szenen/1945.svg) | `1945`| ![Preview](/svg/szenen/1946.svg) | `1946` |
| ![Preview](/svg/szenen/1947.svg) | `1947`


### Doors and Windows

| Icon | Number | Icon | Number | Icon | Number | Icon | Number |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| ![Preview](/svg/tueren-und-fenster/1465.svg) | `1465`| ![Preview](/svg/tueren-und-fenster/1466.svg) | `1466`| ![Preview](/svg/tueren-und-fenster/1467.svg) | `1467`| ![Preview](/svg/tueren-und-fenster/1468.svg) | `1468` |
| ![Preview](/svg/tueren-und-fenster/1469.svg) | `1469`| ![Preview](/svg/tueren-und-fenster/1470.svg) | `1470`| ![Preview](/svg/tueren-und-fenster/1471.svg) | `1471`| ![Preview](/svg/tueren-und-fenster/1472.svg) | `1472` |
| ![Preview](/svg/tueren-und-fenster/1473.svg) | `1473`| ![Preview](/svg/tueren-und-fenster/1474.svg) | `1474`| ![Preview](/svg/tueren-und-fenster/1475.svg) | `1475`| ![Preview](/svg/tueren-und-fenster/1483.svg) | `1483` |
| ![Preview](/svg/tueren-und-fenster/1484.svg) | `1484`| ![Preview](/svg/tueren-und-fenster/1648.svg) | `1648`| ![Preview](/svg/tueren-und-fenster/1649.svg) | `1649`| ![Preview](/svg/tueren-und-fenster/1650.svg) | `1650` |
| ![Preview](/svg/tueren-und-fenster/1967.svg) | `1967`| ![Preview](/svg/tueren-und-fenster/1968.svg) | `1968`| ![Preview](/svg/tueren-und-fenster/2099.svg) | `2099`


## Contributing
The repository is not intended to contain other icons than the ones made by Feller.
If you notice that they updated their icon set, let me know by opening a new issue here on GitHub.

You can use the very crudely hacked-together script `bin/update-icons` that attempts to download new icons
and `bin/build` to rebuild `ha-feller-icons.js` and `README.md`.
