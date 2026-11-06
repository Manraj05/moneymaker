# Cold Outreach Engine & Pipeline

This directory manages cold outreach campaigns, prospect vaults, personalized teaser screenshots, and SMS scripts for high-ticket home service contractors across the Greater Toronto Area.

---

## 🎯 Target Pipeline

| # | Business Name | Location | Phone | Status | Vault Assets |
|---|---------------|----------|-------|--------|--------------|
| **001** | **LAYR EPOXY** | Mississauga, ON | `(437) 365-6841` | `READY_FOR_OUTREACH` | [View Vault](./layr-epoxy/) · [Screenshot](./layr-epoxy/teaser-mobile.png) · [SMS Script](./layr-epoxy/sms-script.txt) |

---

## ⚡ 60-Second Prospect Workflow (How to Add the Next Target)

Whenever you have a new prospect from a cold call, Google Maps search, or local outreach:

1. **Send the Business Info + Reviews**:
   - Business Name
   - City & Address
   - Phone Number
   - Google Rating & Review Count
   - Key Services (e.g. Garage Flake, Metallic, Commercial, Patios)

2. **Automated Teaser Generation**:
   ```bash
   npm run teaser -- <client-slug>
   ```
   *Example:*
   ```bash
   npm run teaser -- layr-epoxy
   ```

3. **Output Generated in Seconds**:
   - `outreach/<client-slug>/teaser-mobile.png`: High-res, centered iPhone mockup with authentic before/after split, custom brand mark, and direct dial CTA.
   - `outreach/<client-slug>/sms-script.txt`: 3 high-converting text hooks tailored to the contractor's exact rating and city.
   - `outreach/<client-slug>/client-data.json`: Complete client profile preserved in the vault.
   - Updated entry in `outreach/pipeline.json`.

---

## 📱 Teaser Design Standards (Locked-in Template)
- **Brand Mark**: Clean architectural isometric emblem.
- **Hero Messaging**: City-specific high-ticket headline with instant price anchoring ($4.50/sq ft).
- **Interactive Visual**: True photorealistic bare unsealed concrete slab (Before) vs mirror-gloss metallic resin (After).
- **Direct Dial**: Click-to-call button with exact contractor phone number.
- **Trust Strip**: Real Google rating badge, freeze-thaw certified, 15-year warranty, zero hot-tire pickup.
