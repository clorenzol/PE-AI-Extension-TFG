import React from 'react';
import "./Ideas.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { ROUTES } from "../utils/routes";

const ideas = [
  {
    title: "Fund Overview",
    items: [
      "Fund name, vintage year, fund size (AUM)",
      "Strategy (buyout, growth, venture, special situations)",
      "Geographic focus (regions, sectors)"
    ]
  },
  {
    title: "Performance Metrics",
    items: [
      "Net IRR, TVPI, DPI",
      "Capital called vs. distributed",
      "Fund cash flows / PME metrics"
    ]
  },
  {
    title: "Deal Summaries",
    items: [
      "Recent acquisitions or exits",
      "Entry/exit multiples, hold period",
      "Deal thesis & value-creation plan"
    ]
  },
  {
    title: "Portfolio Company Details",
    items: [
      "Company name, industry, HQ location",
      "Revenue, EBITDA, growth rates",
      "Ownership stake, board representation"
    ]
  },
  {
    title: "Team & Track Record",
    items: [
      "General partner bios",
      "Prior fund performance",
      "Notable co-investors"
    ]
  },
  {
    title: "Market & Sector Insights",
    items: [
      "Competitive landscape",
      "Macro trends, sector headwinds/opportunities"
    ]
  },
  {
    title: "Fund Terms & Fees",
    items: [
      "Management fee, carry structure",
      "Hurdle rates, preferred return"
    ]
  },
  {
    title: "ESG / Impact Metrics",
    items: [
      "Sustainability policies",
      "Diversity & governance KPIs"
    ]
  },
  {
    title: "Risk Factors & Due Diligence Notes",
    items: [
      "Regulatory, operational, financial risks",
      "Recent litigation or restructuring events"
    ]
  },
  {
    title: "Exit Track Record",
    items: [
      "Exits by year, exit multiples",
      "IPOs, trade sales, secondary transactions"
    ]
  },
];

export default function Ideas({ setPage }) {
  return (
    <div className="ideas-container">
      <div className="ideas-header">
        <button
          onClick={() => setPage(ROUTES.PROFILE)}
          className="back-button"
          title="Back to Settings"
        >
          <IoArrowBackOutline />
        </button>
        <h2 className="ideas-title">Prompt Ideas</h2>
      </div>
      <div className="ideas-list">
        {ideas.map((section) => (
          <div key={section.title} className="ideas-section">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
);
}
