# Signature Staff QR clock-in (backup for when the Signature Staff App fails)
- `index.html` worker page (`?site=ccc`), `admin.html` read-only admin view, `config.js` sites + backend URL.
- Backend: `apps-script/Code.gs` (Jack's existing attendance-register Apps Script, with a `type:'clock'` action added).
- No secrets in this repo. The admin key lives only in Apps Script Script Properties.
See JACK-STEPS.md.
