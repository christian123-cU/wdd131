// ============================================================
//  place.js — Kenya Place Page
//  Handles: footer year/last-modified, wind chill calculation
// ============================================================

// --- Footer: current year ---
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- Footer: last modified date ---
const lastModifiedSpan = document.getElementById("last-modified");
if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}

// ============================================================
//  Wind Chill Calculation (Metric: °C and km/h)
//
//  Formula (Environment Canada / WMO metric):
//    WC = 13.12 + 0.6215·T − 11.37·V^0.16 + 0.3965·T·V^0.16
//
//  Only applicable when:
//    Temperature ≤ 10 °C  AND  Wind speed > 4.8 km/h
// ============================================================

/**
 * Calculate wind chill factor (metric).
 * @param {number} temperature - Temperature in °C
 * @param {number} windSpeed   - Wind speed in km/h
 * @returns {number} Wind chill temperature in °C (rounded to 1 decimal)
 */
function calculateWindChill(temperature, windSpeed) {
  return parseFloat(
    (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1)
  );
}

// --- Static weather values (matching HTML content) ---
const temperature = 24;   // °C  — Nairobi: warm sunny day
const windSpeed   = 12;   // km/h

// --- Display wind chill or N/A ---
const windChillElement = document.getElementById("wind-chill");

if (windChillElement) {
  if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${chill} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}
