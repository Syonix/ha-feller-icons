# Feller Smart Home Icons for Home Assistant

![Feller Icon Header](header.jpg)

This project brings icons by [Feller](https://www.feller.ch) to Home Assistant.

Feller is  Switzerland's biggest provider of light switches, wall sockets and electrical equipment.
They provide an icon set for their product line used for all their products and also usable for
custom labeling of switches, etc.

Icons are identified by number, so you can for example use `feller:1409` for the lightbulb icon.
A list of icons can be found [here](https://webcache.brandmaker.com/314_1685116696676.original.html).
If the Link doesn't work, you should find the download [here](https://online-katalog.feller.ch/download/index.php?menueidLev1=280).

Since 1.1.0 there are also aliases available, so you can use `feller:lightbulb` as well.

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

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/aktionen/1460.svg) | `1460` | `bell`| ![Preview](/svg/aktionen/1485.svg) | `1485` | `manual`, `hand`| ![Preview](/svg/aktionen/1651.svg) | `1651` | `clock`, `timer` |
| ![Preview](/svg/aktionen/1652.svg) | `1652` | `house-play`, `house-scene`, `house-presence-simulation`| ![Preview](/svg/aktionen/1653.svg) | `1653` | `service`| ![Preview](/svg/aktionen/1654.svg) | `1654` | `care` |
| ![Preview](/svg/aktionen/1655.svg) | `1655` | `auto`| ![Preview](/svg/aktionen/1674.svg) | `1674` | `pause`| ![Preview](/svg/aktionen/1747.svg) | `1747` | `graph` |
| ![Preview](/svg/aktionen/1748.svg) | `1748` | `calendar`| ![Preview](/svg/aktionen/1749.svg) | `1749` | `phone`| ![Preview](/svg/aktionen/1750.svg) | `1750` | `train` |
| ![Preview](/svg/aktionen/1753.svg) | `1753` | `presence-simulation`| ![Preview](/svg/aktionen/1755.svg) | `1755` | `house-clock`, `house-timer`| ![Preview](/svg/aktionen/1794.svg) | `1794` | `coil` |
| ![Preview](/svg/aktionen/1795.svg) | `1795` | `uncoil`| ![Preview](/svg/aktionen/1818.svg) | `1818` | `lightning`| ![Preview](/svg/aktionen/1911.svg) | `1911` | `gauge-target`, `target-value` |
| ![Preview](/svg/aktionen/1917.svg) | `1917` | `pie-chart`| ![Preview](/svg/aktionen/1920.svg) | `1920` | `filter`| ![Preview](/svg/aktionen/1924.svg) | `1924` | `gauge` |
| ![Preview](/svg/aktionen/1957.svg) | `1957` | `house-connection`, `local-connection`| ![Preview](/svg/aktionen/1958.svg) | `1958` | `cloud-connection`| ![Preview](/svg/aktionen/1973.svg) | `1973` | `sprinkler` |
| ![Preview](/svg/aktionen/2068.svg) | `2068` | `alarm`


### On / off

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/ein-aus/1403.svg) | `1403` | `plus`| ![Preview](/svg/ein-aus/1404.svg) | `1404` | `minus`| ![Preview](/svg/ein-aus/1415.svg) | `1415` | `power` |
| ![Preview](/svg/ein-aus/1416.svg) | `1416` | `on-text`| ![Preview](/svg/ein-aus/1417.svg) | `1417` | `off-text`| ![Preview](/svg/ein-aus/1486.svg) | `1486` | `plusminus` |
| ![Preview](/svg/ein-aus/1492.svg) | `1492` | `on`| ![Preview](/svg/ein-aus/1493.svg) | `1493` | `off`| ![Preview](/svg/ein-aus/1604.svg) | `1604` | `switch` |
| ![Preview](/svg/ein-aus/1675.svg) | `1675` | `onoff`| ![Preview](/svg/ein-aus/1678.svg) | `1678` | `socket`| ![Preview](/svg/ein-aus/1966.svg) | `1966` | `socket-on` |



### Climate

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/klima/1414.svg) | `1414` | `ventilator`| ![Preview](/svg/klima/1458.svg) | `1458` | `day`, `sun`| ![Preview](/svg/klima/1459.svg) | `1459` | `night`, `moon` |
| ![Preview](/svg/klima/1462.svg) | `1462` | `fan`| ![Preview](/svg/klima/1463.svg) | `1463` | `freeze-protection`, `snow`| ![Preview](/svg/klima/1464.svg) | `1464` | `floor-heading` |
| ![Preview](/svg/klima/1482.svg) | `1482` | `heat`| ![Preview](/svg/klima/1487.svg) | `1487` | `house-present`| ![Preview](/svg/klima/1488.svg) | `1488` | `house-absent` |
| ![Preview](/svg/klima/1490.svg) | `1490` | `cold`, `snow2`| ![Preview](/svg/klima/1491.svg) | `1491` | `humidity`, `water`| ![Preview](/svg/klima/1498.svg) | `1498` | `min` |
| ![Preview](/svg/klima/1499.svg) | `1499` | `max`| ![Preview](/svg/klima/1613.svg) | `1613` | `weather-rain`| ![Preview](/svg/klima/1614.svg) | `1614` | `thermostat`, `temperature` |
| ![Preview](/svg/klima/1615.svg) | `1615` | `radiator`| ![Preview](/svg/klima/1679.svg) | `1679` | `house-eco`| ![Preview](/svg/klima/1746.svg) | `1746` | `weather` |
| ![Preview](/svg/klima/1792.svg) | `1792` | `air-intake`| ![Preview](/svg/klima/1793.svg) | `1793` | `air-exhaust`| ![Preview](/svg/klima/1860.svg) | `1860` | `weather-wind` |
| ![Preview](/svg/klima/1861.svg) | `1861` | `house-temp`, `temp-indoor`| ![Preview](/svg/klima/1862.svg) | `1862` | `temp-outdoor`| ![Preview](/svg/klima/1863.svg) | `1863` | `weather-umbrella` |
| ![Preview](/svg/klima/1864.svg) | `1864` | `weather-umbrella-closed`| ![Preview](/svg/klima/1869.svg) | `1869` | `sunrise`| ![Preview](/svg/klima/1870.svg) | `1870` | `sunset` |
| ![Preview](/svg/klima/1904.svg) | `1904` | `airquality`, `co2`| ![Preview](/svg/klima/1906.svg) | `1906` | `daynight`, `sunmoon`| ![Preview](/svg/klima/1929.svg) | `1929` | `weather-cloud` |
| ![Preview](/svg/klima/1930.svg) | `1930` | `weather-lightning`, `weather-thunder`| ![Preview](/svg/klima/1931.svg) | `1931` | `weather-snow`| ![Preview](/svg/klima/2150.svg) | `2150` | `thermostat-plus`, `temperature-plus` |
| ![Preview](/svg/klima/2151.svg) | `2151` | `thermostat-minus`, `temperature-minus`


### Light

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/licht/1409.svg) | `1409` | `lightbulb`| ![Preview](/svg/licht/1410.svg) | `1410` | `ceiling-lamp`| ![Preview](/svg/licht/1411.svg) | `1411` | `floor-lamp` |
| ![Preview](/svg/licht/1412.svg) | `1412` | `desk-lamp`| ![Preview](/svg/licht/1413.svg) | `1413` | `wall-lamp`| ![Preview](/svg/licht/1422.svg) | `1422` | `track-light` |
| ![Preview](/svg/licht/1423.svg) | `1423` | `direct-light`| ![Preview](/svg/licht/1424.svg) | `1424` | `indirect-light`| ![Preview](/svg/licht/1425.svg) | `1425` | `outdoor-lamp-garden` |
| ![Preview](/svg/licht/1426.svg) | `1426` | `outdoor-lamp-balcony`| ![Preview](/svg/licht/1427.svg) | `1427` | `lightbulb-on`| ![Preview](/svg/licht/1428.svg) | `1428` | `lightbulb-plus` |
| ![Preview](/svg/licht/1429.svg) | `1429` | `lightbulb-minus`| ![Preview](/svg/licht/1430.svg) | `1430` | `lightbulb-on-plus`| ![Preview](/svg/licht/1431.svg) | `1431` | `lightbulb-on-minus` |
| ![Preview](/svg/licht/1605.svg) | `1605` | `floor-spot`| ![Preview](/svg/licht/1606.svg) | `1606` | `wall-spot`| ![Preview](/svg/licht/1607.svg) | `1607` | `ceiling-spot` |
| ![Preview](/svg/licht/1676.svg) | `1676` | `fluorescent-lamp`| ![Preview](/svg/licht/1788.svg) | `1788` | `ceiling-lamp-plus`| ![Preview](/svg/licht/1789.svg) | `1789` | `ceiling-lamp-minus` |
| ![Preview](/svg/licht/1790.svg) | `1790` | `wall-lamp-plus`| ![Preview](/svg/licht/1791.svg) | `1791` | `wall-lamp-minus`| ![Preview](/svg/licht/2067.svg) | `2067` | `lightbulb-on-plusminus` |
| ![Preview](/svg/licht/2109.svg) | `2109` | `lightbulb-timer`


### Multimedia

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/multimedia/1405.svg) | `1405` | `ramp-up`| ![Preview](/svg/multimedia/1406.svg) | `1406` | `ramp-down`| ![Preview](/svg/multimedia/1455.svg) | `1455` | `speaker` |
| ![Preview](/svg/multimedia/1456.svg) | `1456` | `volume-low`| ![Preview](/svg/multimedia/1457.svg) | `1457` | `volume-high`| ![Preview](/svg/multimedia/1461.svg) | `1461` | `music` |
| ![Preview](/svg/multimedia/1477.svg) | `1477` | `more-less`| ![Preview](/svg/multimedia/1478.svg) | `1478` | `tv`| ![Preview](/svg/multimedia/1480.svg) | `1480` | `screen-up` |
| ![Preview](/svg/multimedia/1481.svg) | `1481` | `screen-down`| ![Preview](/svg/multimedia/1686.svg) | `1686` | `volume-plus`| ![Preview](/svg/multimedia/1687.svg) | `1687` | `volume-minus` |
| ![Preview](/svg/multimedia/1688.svg) | `1688` | `radio`| ![Preview](/svg/multimedia/1689.svg) | `1689` | `cd`, `dvd`, `bluray`| ![Preview](/svg/multimedia/1744.svg) | `1744` | `globe`, `world`, `www` |
| ![Preview](/svg/multimedia/1745.svg) | `1745` | `film`| ![Preview](/svg/multimedia/1925.svg) | `1925` | `music-play`| ![Preview](/svg/multimedia/1928.svg) | `1928` | `music-stop` |



### Arrows

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/pfeile/1407.svg) | `1407` | `arrows-open`| ![Preview](/svg/pfeile/1408.svg) | `1408` | `arrows-close`| ![Preview](/svg/pfeile/1432.svg) | `1432` | `arrow-up` |
| ![Preview](/svg/pfeile/1433.svg) | `1433` | `arrow-down`| ![Preview](/svg/pfeile/1434.svg) | `1434` | `arrow-left`| ![Preview](/svg/pfeile/1435.svg) | `1435` | `arrow-right` |
| ![Preview](/svg/pfeile/1436.svg) | `1436` | `arrow-updown`| ![Preview](/svg/pfeile/1437.svg) | `1437` | `arrow-up2`| ![Preview](/svg/pfeile/1438.svg) | `1438` | `arrow-down2` |
| ![Preview](/svg/pfeile/1439.svg) | `1439` | `arrow-left2`| ![Preview](/svg/pfeile/1440.svg) | `1440` | `arrow-right2`| ![Preview](/svg/pfeile/1441.svg) | `1441` | `arrows-open2` |
| ![Preview](/svg/pfeile/1442.svg) | `1442` | `arrows-close2`| ![Preview](/svg/pfeile/1443.svg) | `1443` | `arrow-updown2`| ![Preview](/svg/pfeile/1444.svg) | `1444` | `arrow-up3` |
| ![Preview](/svg/pfeile/1445.svg) | `1445` | `arrow-down3`| ![Preview](/svg/pfeile/1446.svg) | `1446` | `arrow-left3`| ![Preview](/svg/pfeile/1447.svg) | `1447` | `arrow-right3` |
| ![Preview](/svg/pfeile/1448.svg) | `1448` | `arrows-open3`| ![Preview](/svg/pfeile/1449.svg) | `1449` | `arrows-close3`| ![Preview](/svg/pfeile/1450.svg) | `1450` | `arrow-updown3` |
| ![Preview](/svg/pfeile/1451.svg) | `1451` | `rotate-left`| ![Preview](/svg/pfeile/1452.svg) | `1452` | `rotate-right`| ![Preview](/svg/pfeile/1453.svg) | `1453` | `arrows-left` |
| ![Preview](/svg/pfeile/1454.svg) | `1454` | `arrows-right`| ![Preview](/svg/pfeile/1616.svg) | `1616` | `arrow-up-end`| ![Preview](/svg/pfeile/1617.svg) | `1617` | `arrow-down-end` |
| ![Preview](/svg/pfeile/1618.svg) | `1618` | | ![Preview](/svg/pfeile/1619.svg) | `1619` | `arrow-right-end`| ![Preview](/svg/pfeile/1620.svg) | `1620` | `arrow-up-end2` |
| ![Preview](/svg/pfeile/1621.svg) | `1621` | `arrow-down-end2`| ![Preview](/svg/pfeile/1622.svg) | `1622` | `arrow-left-end2`| ![Preview](/svg/pfeile/1623.svg) | `1623` | `arrow-right-end2` |
| ![Preview](/svg/pfeile/1670.svg) | `1670` | `arrow-updown-end`| ![Preview](/svg/pfeile/1671.svg) | `1671` | `arrow-updown-end2`| ![Preview](/svg/pfeile/1970.svg) | `1970` | `arrow-down-end3` |



### Rooms

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/raeume/1476.svg) | `1476` | `wheelchair`| ![Preview](/svg/raeume/1479.svg) | `1479` | `stairs`| ![Preview](/svg/raeume/1624.svg) | `1624` | `house-door`, `main-entrance`, `entrance` |
| ![Preview](/svg/raeume/1625.svg) | `1625` | `living-room`| ![Preview](/svg/raeume/1626.svg) | `1626` | `kitchen`, `pan`| ![Preview](/svg/raeume/1627.svg) | `1627` | `dining-room`, `plate-cutlery` |
| ![Preview](/svg/raeume/1628.svg) | `1628` | `bedroom`, `bed-two-people`| ![Preview](/svg/raeume/1629.svg) | `1629` | `guestroom`, `bed-one-person`| ![Preview](/svg/raeume/1630.svg) | `1630` | `childrens-room`, `stroller` |
| ![Preview](/svg/raeume/1631.svg) | `1631` | `childrens-room2`, `bunk-bed`| ![Preview](/svg/raeume/1632.svg) | `1632` | `office`| ![Preview](/svg/raeume/1633.svg) | `1633` | `atelier`, `meeting-room`, `group` |
| ![Preview](/svg/raeume/1634.svg) | `1634` | `bathroom1`, `bathtub`| ![Preview](/svg/raeume/1635.svg) | `1635` | `shower`| ![Preview](/svg/raeume/1636.svg) | `1636` | `corridor` |
| ![Preview](/svg/raeume/1637.svg) | `1637` | `coat-hanger`, `wardrobe`| ![Preview](/svg/raeume/1638.svg) | `1638` | `cleaning`, `storage`| ![Preview](/svg/raeume/1639.svg) | `1639` | `staircase` |
| ![Preview](/svg/raeume/1641.svg) | `1641` | `bike`| ![Preview](/svg/raeume/1642.svg) | `1642` | `wine-bottle`, `wine-cellar`| ![Preview](/svg/raeume/1643.svg) | `1643` | `car` |
| ![Preview](/svg/raeume/1644.svg) | `1644` | `balcony`| ![Preview](/svg/raeume/1645.svg) | `1645` | `terrace`| ![Preview](/svg/raeume/1646.svg) | `1646` | `tree` |
| ![Preview](/svg/raeume/1647.svg) | `1647` | `flower`| ![Preview](/svg/raeume/1960.svg) | `1960` | `bathroom2`, `sink`| ![Preview](/svg/raeume/1999.svg) | `1999` |  |



### System

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/system/1656.svg) | `1656` | `star`, `favorite`| ![Preview](/svg/system/1657.svg) | `1657` | `settings`, `cog`| ![Preview](/svg/system/1658.svg) | `1658` | `configuration`, `tools` |
| ![Preview](/svg/system/1659.svg) | `1659` | `signal-low`| ![Preview](/svg/system/1660.svg) | `1660` | `signal-medium`| ![Preview](/svg/system/1661.svg) | `1661` | `signal-high` |
| ![Preview](/svg/system/1662.svg) | `1662` | `signal-max`| ![Preview](/svg/system/1663.svg) | `1663` | `location`| ![Preview](/svg/system/1664.svg) | `1664` | `movement` |
| ![Preview](/svg/system/1665.svg) | `1665` | `smoke`| ![Preview](/svg/system/1666.svg) | `1666` | `info`| ![Preview](/svg/system/1667.svg) | `1667` | `help` |
| ![Preview](/svg/system/1668.svg) | `1668` | `contact`, `envelope`| ![Preview](/svg/system/1669.svg) | `1669` | `lips`, `recommend`| ![Preview](/svg/system/1672.svg) | `1672` | `warning` |
| ![Preview](/svg/system/1673.svg) | `1673` | `confirm`, `check-circle`, `cancel`, `decline`, `times-circle`| ![Preview](/svg/system/1918.svg) | `1918` | `star-plus`, `favorite-plus`| ![Preview](/svg/system/1919.svg) | `1919` | `star-minus`, `favorite-minus` |
| ![Preview](/svg/system/1921.svg) | `1921` | `envelope-open`| ![Preview](/svg/system/1926.svg) | `1926` | `value`, `bars`| ![Preview](/svg/system/1927.svg) | `1927` | `features`, `tiles` |
| ![Preview](/svg/system/1932.svg) | `1932` | | ![Preview](/svg/system/1961.svg) | `1961` | `error`, `confusion`| ![Preview](/svg/system/1964.svg) | `1964` | `trash`, `delete` |
| ![Preview](/svg/system/1977.svg) | `1977` | `history`, `document`


### Scenes

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/szenen/1418.svg) | `1418` | `scene1-box`| ![Preview](/svg/szenen/1419.svg) | `1419` | `scene2-box`| ![Preview](/svg/szenen/1420.svg) | `1420` | `scene3-box` |
| ![Preview](/svg/szenen/1421.svg) | `1421` | `scene4-box`| ![Preview](/svg/szenen/1489.svg) | `1489` | `scene-party`| ![Preview](/svg/szenen/1494.svg) | `1494` | `scene1-text` |
| ![Preview](/svg/szenen/1495.svg) | `1495` | `scene2-text`| ![Preview](/svg/szenen/1496.svg) | `1496` | `scene3-text`| ![Preview](/svg/szenen/1497.svg) | `1497` | `scene4-text` |
| ![Preview](/svg/szenen/1600.svg) | `1600` | `1`| ![Preview](/svg/szenen/1601.svg) | `1601` | `2`| ![Preview](/svg/szenen/1602.svg) | `1602` | `3` |
| ![Preview](/svg/szenen/1603.svg) | `1603` | `4`| ![Preview](/svg/szenen/1608.svg) | `1608` | `scene-work`| ![Preview](/svg/szenen/1609.svg) | `1609` | `scene-read` |
| ![Preview](/svg/szenen/1610.svg) | `1610` | `scene-relax`| ![Preview](/svg/szenen/1611.svg) | `1611` | `scene-sleep`| ![Preview](/svg/szenen/1612.svg) | `1612` | `scene-guests` |
| ![Preview](/svg/szenen/1640.svg) | `1640` | `scene-save`| ![Preview](/svg/szenen/1677.svg) | `1677` | `scene-holidays`| ![Preview](/svg/szenen/1690.svg) | `1690` | `user1` |
| ![Preview](/svg/szenen/1691.svg) | `1691` | `user2`| ![Preview](/svg/szenen/1692.svg) | `1692` | `user3`| ![Preview](/svg/szenen/1693.svg) | `1693` | `user4` |
| ![Preview](/svg/szenen/1694.svg) | `1694` | `user5`| ![Preview](/svg/szenen/1698.svg) | `1698` | `0`| ![Preview](/svg/szenen/1741.svg) | `1741` | `user6` |
| ![Preview](/svg/szenen/1742.svg) | `1742` | `user7`| ![Preview](/svg/szenen/1743.svg) | `1743` | `user8`| ![Preview](/svg/szenen/1940.svg) | `1940` | `scene1-circle` |
| ![Preview](/svg/szenen/1941.svg) | `1941` | `scene2-circle`| ![Preview](/svg/szenen/1942.svg) | `1942` | `scene3-circle`| ![Preview](/svg/szenen/1943.svg) | `1943` | `scene4-circle` |
| ![Preview](/svg/szenen/1944.svg) | `1944` | `scene1-square`| ![Preview](/svg/szenen/1945.svg) | `1945` | `scene2-square`| ![Preview](/svg/szenen/1946.svg) | `1946` | `scene3-square` |
| ![Preview](/svg/szenen/1947.svg) | `1947` | `scene4-square`


### Doors and Windows

| Icon | Number | Aliases | Icon | Number | Aliases | Icon | Number | Aliases |
| :--- | :---   | :---    | :--- | :---   | :---    | :--- | :---   | :---    |
| ![Preview](/svg/tueren-und-fenster/1465.svg) | `1465` | `shutter`, `roller-shutter`| ![Preview](/svg/tueren-und-fenster/1466.svg) | `1466` | `shutter-up`, `roller-shutter-up`| ![Preview](/svg/tueren-und-fenster/1467.svg) | `1467` | `shutter-down`, `roller-shutter-down` |
| ![Preview](/svg/tueren-und-fenster/1468.svg) | `1468` | `awning`| ![Preview](/svg/tueren-und-fenster/1469.svg) | `1469` | `awning-up`| ![Preview](/svg/tueren-und-fenster/1470.svg) | `1470` | `awning-down` |
| ![Preview](/svg/tueren-und-fenster/1471.svg) | `1471` | `skylight`| ![Preview](/svg/tueren-und-fenster/1472.svg) | `1472` | `skylight-up`| ![Preview](/svg/tueren-und-fenster/1473.svg) | `1473` | `skylight-down` |
| ![Preview](/svg/tueren-und-fenster/1474.svg) | `1474` | `door-closed`| ![Preview](/svg/tueren-und-fenster/1475.svg) | `1475` | `key`| ![Preview](/svg/tueren-und-fenster/1483.svg) | `1483` | `lock-closed` |
| ![Preview](/svg/tueren-und-fenster/1484.svg) | `1484` | `lock-open`| ![Preview](/svg/tueren-und-fenster/1648.svg) | `1648` | `door-open`| ![Preview](/svg/tueren-und-fenster/1649.svg) | `1649` | `window-closed` |
| ![Preview](/svg/tueren-und-fenster/1650.svg) | `1650` | `window-open`| ![Preview](/svg/tueren-und-fenster/1967.svg) | `1967` | `garage-door-down`| ![Preview](/svg/tueren-und-fenster/1968.svg) | `1968` | `garage-door-up` |
| ![Preview](/svg/tueren-und-fenster/2099.svg) | `2099` | `garage-door`


## Contributing
The repository is not intended to contain other icons than the ones made by Feller.
If you notice that they updated their icon set, let me know by opening a new issue here on GitHub.

You can use the very crudely hacked-together script `bin/update-icons` that attempts to download new icons
and `bin/build` to rebuild `ha-feller-icons.js` and `README.md`.
