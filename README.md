# Signature Staff QR clock-in (backup for when the Signature Staff App fails)
- `index.html` worker page (`?site=ccc`), `admin.html` read-only admin view, `config.js` sites + backend URL.
- Backend: `apps-script/Code.gs` (Jack's existing attendance-register Apps Script, with a `type:'clock'` action added).
- No secrets in this repo. The admin key lives only in Apps Script Script Properties.
See JACK-STEPS.md.
- Site coordinates/radius are checked on the server (`SITES` in Code.gs); keep `config.js` sites in step with it.
- Admin page reads clock-ins by POST (key never in the URL).
