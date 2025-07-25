// src/reportWebVitals.js

let vitalsHandler = null;

export function setVitalsHandler(handler) {
  vitalsHandler = handler;
}

export function captureVitals(metric) {
  if (vitalsHandler) {
    vitalsHandler(metric);
  }
}

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
      // getCLS(onPerfEntry);
      // getFID(onPerfEntry);
      // getLCP(onPerfEntry);
      // getFCP(onPerfEntry);
      // getTTFB(onPerfEntry);  
    });
  }
};

export default (callback) => {
  reportWebVitals(captureVitals);
};
