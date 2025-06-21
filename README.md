# 🚌 BusRadar API (Backend)
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&pause=1000&color=F7F547&width=435&lines=Work+in+Progress)](https://git.io/typing-svg)

This is  the backend server for the **BusRadar App**, a commuter safety app designed to predict early-turning (curtailed) buses in London.

Currently connected to a Supabase-hosted PostgreSQL database.  

🧪 This is a work-in-progress backend project. Some planned features are still under development but listed below to demonstrate the roadmap and problem-solving approach.

### ⚠️ Curtailment Risk Prediction

Estimate whether a bus is likely to **terminate early** (curtail):

- Show **risk level**: 🔴 High | 🟠 Medium | 🟢 Low
      Risk level calculated using:
  - 🕰️ Delay time (`expectedArrival - scheduledArrival`)
  - 📊 Route frequency (e.g. high frequency = lower risk)
  - 🌍 (Planned) Known turnback hotspots based on location patterns

---

### 🛑 Visual Feedback (Mobile-First UX)

Provide intuitive visual cues for on-the-go users:

  - Display risk levels using colour-coded badges/icons
  - Designed with a **touch-friendly** interface (React Native)

---

### 📝 Crowdsourced Report Submission

Let users share real-time commuter feedback:

- `POST /api/report` backend endpoint
-  Users can submit live reports like:
  - “Got kicked off at Apex Corner in the rain”
  - “Bus stuck in traffic at Roehampton”
  - “Too crowded to board”
- Reports saved in **PostgreSQL** (via **Supabase**)
- 🧭 (Planned) Optional metadata:
  - Start & destination
  - Current location
  - (v2.0+) Photo upload


## 🛠️ Tech Stack

- **Node.js + Express**
- **TypeScript**
- **PostgreSQL (Supabase)**
- **pg** (database client)
- **Jest + Supertest** (planned for TDD)


