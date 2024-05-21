---
title: 'The Different Types of Remote Sensing '
date: 2024-05-21T10:00:00-05:00
draft: true
description: |
  Understanding Remote Sensors and Their Varied Applications
image: /uploads/image.png
type: blog
layout: single
author: Deke Young, VP of Product Management
url: /blog/types-of-remote-sensing
---
Remote Sensing can be defined as the measurement of an object’s characteristics by detecting and monitoring its physical characteristics without making direct physical contact with the object itself.

Remote sensing is how we can detect and monitor changes in weather, sea surface temperature, and volcano lava flows while minimizing risk to human beings and equipment.

Remote sensing enables us to monitor forest fires, floods, hurricanes, and other weather events, in addition to detecting motion, mapping the ocean floor, and even changing our phone screen brightness to save power.

However, **a single type of remote sensor can’t provide all of the capabilities listed above**. There are a variety of remote sensors used to gather diverse data sets and address specific challenges in Earth observation.

## Active Remote Sensing

Active remote sensors function using their own source of light or energy emission. These sensors release pulses of energy to measure distance and gather information about a specific subject. Since active remote sensors don’t require sunlight to operate, they can operate during the day or at night. The two types of sensors that fall under the category of active remote sensors are ​​Radio Detection And Ranging (RADAR) sensors and Light Detection and Ranging (LiDAR) sensors.

<table><tbody><tr><td><h3>RADAR Sensors</h3><p>RADAR sensors measure a subject’s distance via radio signals. A radar sensor emits energy pulses to a subject, and based on how long it takes for the pulses to reach the subject and return to the sensor, the sensor calculates the subject’s distance from the sensor itself.</p><p></p><p>One example of a radar sensor is a <a href="https://www.earthdata.nasa.gov/learn/backgrounders/what-is-sar">Synthetic Aperture Radar (SAR)</a>. Used in government missions such as SENTINEL and now available commercially, SAR can generate detailed images of the Earth to identify and monitor deforestation, flooding, glacier, and earth movements. SAR measurements are not significantly impacted by weather, enabling Earth observation at night.</p></td><td><h3>LiDAR Sensors</h3><p>LiDAR sensors leverage generated light impulses to detect a subject’s distance and location. Similar to radar sensors, LiDAR sensors measure distance by releasing light amplification by the stimulated emission of radiation (laser) pulses to determine how long it takes for the laser to make contact with a subject and return to the sensor.</p><p></p><p>LiDAR is commonly utilized to gauge range and altitude, as well as temperature, cloud coverage, and wind speed, while also determining the dimensions and contours of landscape features such as evaluating the height and density of forests, sea surface roughness, and finding archeological sites.</p></td></tr></tbody></table>

## Passive Remote Sensing

Passive remote sensors don’t have their own source of light or energy emissions. For passive remote sensors to function successfully, they require the subject to produce or reflect energy. With a reliance on external energy emissions, passive remote sensors typically have more operational restrictions than active sensors. Two common applications of passive remote sensing are electro-optical sensors and infrared sensors.

<table><tbody><tr><td><h3>Electro-Optical Sensors</h3><p>Using the visible part of the electromagnetic spectrum, electro-optical sensors measure spectral intensity in specific wavelength bands to detect and gather information about a subject.</p><p></p><p>Since they do not emit energy, electro-optical sensors have lower energy requirements, resulting in improved system cost-effectiveness for constellation operators. However, their dependency on sunlight limits their capacity for nighttime data collection. Excessive cloud cover may also necessitate multiple passes to capture imagery of a specific area as clouds occlude the view of the ground.</p></td><td><h3>Infrared Sensors</h3><p>Infrared sensors detect and capture infrared radiation emitted by objects on the Earth's surface. Infrared sensors play a crucial role in understanding temperature variations and thermal characteristics of different land and water features.</p><p></p><p>An example of an infrared sensor is the Thermal Infrared Sensor (TIRS), which is part of the payload on <a href="https://landsat.gsfc.nasa.gov/satellites/landsat-8/">Landsat 8</a>. Landsat 8 is a satellite operated by NASA and the U.S. Geological Survey (USGS) for capturing high-quality imagery of the Earth's surface.</p></td></tr></tbody></table>

## Microwave Remote Sensing

Microwave remote sensing operates in the microwave section of the Earth’s electromagnetic spectrum, at wavelengths ranging in size from one centimeter to one meter. The microwave spectrum’s wavelengths result in unique features that assist in remote sensing.

The longer wavelengths of microwave radiation are not susceptible to the atmospheric scattering (dust, fog, rainfall, etc.) that hinders shorter optical wavelengths. The ability to pass through the atmosphere allows the detection of microwave energy under almost any weather conditions — allowing data collection at any time.

Although most sensors operating in the microwave section of the Earth’s spectrum are active, passive remote sensors can be used to detect the small volumes of energy naturally released by objects on the Earth’s surface.

## Where Remote Sensing Satellites Operate

There are various orbits where remote sensing satellites can operate. These orbits vary in distance from the Earth, the speed satellites must travel at to stay “in-orbit”, and the benefits they provide for specific satellite operations.

### Low Earth Orbit (LEO)

LEO satellites orbit the Earth within 1,200 miles of the Earth’s surface. To remain in orbit, satellites or space stations in LEO must travel around a speed of 17,5000 miles per hour (mph) — taking approximately 90 minutes to complete one revolution around the Earth. Most of the Earth observation satellites currently operational are in LEO.

LEO orbits can pass over or close to the poles - these are known as “Polar” orbits - synchronize their equator crossing time with a specific time of day - “Sun Synchronous Orbits (SSO)”, or be inclined away from the poles by a certain number of degrees - “Inclined Orbits (IO)”. Passive optical sensors tend to be placed in SSO or IO orbits. LEO also carries the advantages of being cheaper to launch to and having a more electronics-forgiving environment than MEO or GEO.

### Sun-Synchronous Orbit (SSO)

### SSO is a type of Polar orbit, where satellites orbit Earth from North to South rather than West to East. SSO satellites have a fixed position regarding the sun — meaning the satellite will travel over the same location on Earth at the same local time every day. A satellite that observes a specific location at the same time every day can be used to monitor the way a location changes over time. Most commercial Earth observation missions using passive optical sensors are flying in SSO.

### Medium Earth Orbit (MEO)

MEO satellites orbit the Earth around 1,243 miles to 22,236 miles away from the surface. With an increased distance in comparison to LEO, satellites in MEO require less fuel to stay in orbit, however, they typically require additional redundancies and shielding of electronic components due to the increased radiation environment further away from Earth. MEO satellites travel around 7,000 mph and take 12 hours to complete a revolution around Earth. As MEO satellites are farther away from the Earth, they provide a higher vantage point — meaning fewer satellites are needed to achieve a full view of the planet’s surface. One example of a satellite system in MEO is the [U.S.’s Global Positioning Satellite System](https://www.gps.gov/) (GPS).

### Geostationary Orbit (GEO)

GEO satellites orbit the Earth approximately 22,236 miles above the equator. As a GEO satellite takes almost 24 hours for a full rotation period around the Earth, the satellite would appear at a standstill to a person standing on Earth looking into the sky. Satellites in GEO are commonly used for communication and meteorological functions. An example of a satellite in GEO is the [National Oceanic and Atmospheric Administration (NOAA) GOES-18](https://www.star.nesdis.noaa.gov/goes/index.php) — an advanced satellite used for environmental and weather monitoring.

## Optimize Your Remote Sensing Mission Planning

Advancements in technology, computing power, and artificial intelligence (AI) have led to a rapid increase in satellite launches. With the continuous evolution of the space industry, satellite operators have more responsibilities than ever.

Whether your constellation flies in LEO, MEO, or GEO, leveraging[automation](https://www.cognitivespace.com/blog/2023/automated-satellite-operations/) to free your operators from tedious, time-consuming, but still necessary tasks allows them to focus on more complex and nuanced tasks that only a human can complete. Using AI, [CNTIENT-Optimize](https://www.cognitivespace.com/product/) considers variables such as spacecraft health and status, orbit maneuver requirements, weather conditions, and more to find the most optimal solutions for your remote sensing mission planning, while tailoring missions to your unique business needs.

[Contact us](https://www.cognitivespace.com/contact/) to automate your satellite operations.

&nbsp;