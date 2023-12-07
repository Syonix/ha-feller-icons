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
%%icons%%

## Contributing
The repository is not intended to contain other icons than the ones made by Feller.
If you notice that they updated their icon set, let me know by opening a new issue here on GitHub.

You can use the very crudely hacked-together script `bin/update-icons` that attempts to download new icons
and `bin/build` to rebuild `ha-feller-icons.js` and `README.md`.
