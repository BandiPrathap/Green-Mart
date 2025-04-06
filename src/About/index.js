// src/About/index.js

import "./index.css";

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">శ్రీ లక్ష్మి నరసింహ ఫెర్టిలైజర్స్ గురించి</h1>
      <p className="about-paragraph">
        నా పేరు కునా వెంకట నరసింహ. నేను శ్రీ లక్ష్మి నరసింహ ఫెర్టిలైజర్స్ యొక్క యజమాని. మా షాప్ తిమ్మంపల్లి, పులివెందుల రోడ్ లో ఉంది. గత 10 సంవత్సరాలుగా మేము రైతులకు నాణ్యమైన ఎరువులు అందిస్తున్నాము. మా ఉత్పత్తుల ద్వారా పంటల నుండి పురుగులు పూర్తిగా పోతాయనే నమ్మకం 100% గా ఉంది.
      </p>

      <div className="about-images">
        <img src="IMAGE_URL_1" alt="Shop View 1" />
        <img src="IMAGE_URL_2" alt="Shop View 2" />
        <img src="IMAGE_URL_3" alt="Shop View 3" />
      </div>

      <p className="about-paragraph">
        మా షాప్ విశ్వసనీయత, నాణ్యత, మరియు రైతులపై ప్రేమతో నిలిచిపోతుంది. మా వద్దకు వచ్చిన ప్రతి రైతు సంతృప్తిగా ఇంటికి వెళ్తారు. మా ఎరువులలో నాణ్యత, సరసమైన ధరలు, మరియు వాడకానికి సులభత ఉంది.
      </p>

      <p className="about-paragraph">
        మీరు ఏ పంట వేసినా, మేము మీకు సరైన పరిష్కారం చూపిస్తాము. మా దుకాణానికి ఒకసారి తప్పకుండా వచ్చి పరిశీలించండి.
      </p>

      <footer className="about-footer">
        <p>🤝 మాకు 100+ రైతుల మరియు కుటుంబాల నమ్మకం ఉంది.</p>
        <a
          href="https://wa.me/919390315670?text=Hi%2C%20I%20want%20to%20know%20more%20about%20your%20shop%20and%20products."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          📞 WhatsApp ద్వారా మమ్మల్ని సంప్రదించండి
        </a>
      </footer>
    </div>
  );
};

export default About;

