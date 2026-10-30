// Signature Staff Clock-in: settings
// Backend: Jack's existing Google Apps Script web app (same URL as the attendance register).
// The token below is NOT a secret (it only filters junk). The admin key lives in Script Properties, never here.

window.SS_CONFIG = {
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbxUVhW2LsPqcVHSayE_p3nP3UCPt0EOwr2N3szmwSHEkI0iL5FDE7hzQDxLiBcKEmikog/exec",
  token: "ssclock-2026",
  officeEmail: "temp@signaturestaff.com.au",
  officeSms: "+61418533357",

  // Branding: logo and icon load from the Signature Staff website.
  // Colours taken from app.signaturestaff.com.au
  brand: {
    logo: "https://app.signaturestaff.com.au/wp-content/uploads/2026/03/Signature-Staff-Logo-300x70.png",
    icon: "https://app.signaturestaff.com.au/wp-content/uploads/2026/03/cropped-Signature-Staff-Logo-Icon-270x270.png",
    primary: "#49AADE",   // Signature Staff sky blue
    dark:    "#0A1F44"    // Signature Staff navy
  },

  // One entry per site. The code (e.g. "ccc") goes on the end of the QR link: ?site=ccc
  // lat/lng: in Google Maps, right-click the exact clock-in spot and click the numbers to copy them.
  // radius: metres from that spot before a clock-in is flagged as "off site".
  sites: {
    ccc: {
      name: "Cairns Convention Centre",
      spot: "Entrance corridor",
      lat: -16.92792,  // CCC entrance corridor (Jack, 30 Oct 2026)
      lng: 145.77783,  // CCC entrance corridor (Jack, 30 Oct 2026)
      radius: 250
    },
    office: {
      name: "Signature Staff Office",
      spot: "Reception",
      // 3/194 McLeod Street, Cairns North QLD 4870
      lat: -16.9137428,
      lng: 145.7640799,
      radius: 150
    }
  }
};
