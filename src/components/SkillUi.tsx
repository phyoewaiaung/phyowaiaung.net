import React, { useEffect, useRef } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { ElementDefinition, Core } from "cytoscape";

const SkillUi: React.FC = () => {
  const cyRef = useRef<Core | null>(null);

  // Define nodes and edges using Cytoscape's ElementDefinition type
  const elements: ElementDefinition[] = [
    // Nodes with manual positioning
    { data: { id: "skills", label: "Skills" }, position: { x: 400, y: 100 } }, // Main node
    {
      data: { id: "html", label: "HTML" },
      position: { x: 0, y: 200 },
      style: {
        "background-image": "url('/assets/html.png')",
        "background-fit": "contain",
      },
    },
    {
      data: { id: "css", label: "CSS" },
      position: { x: 200, y: 200 },
      style: {
        "background-image": "url('/assets/css.png')",
        "background-fit": "contain",
      },
    },
    {
      data: { id: "ui-libraries", label: "" },
      position: { x: 200, y: 400 },
      style: {
        width: 1,
        height: 1,
        // "border-color": "blue",
        "border-opacity": 0.5,
      },
    },
    {
      data: { id: "php-lib", label: "" },
      position: { x: 800, y: 300 },
      style: {
        width: 1,
        height: 1,
        // "border-color": "blue",
        "border-opacity": 0.5,
      },
    },

    {
      data: { id: "bootstrap", label: "Bootstrap", parent: "ui-libraries" },
      position: { x: 125, y: 300 },
      style: {
        "background-image": "url('/assets/bootstrap.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },
    {
      data: { id: "tailwind", label: "Tailwind", parent: "ui-libraries" },
      position: { x: 175, y: 300 },
      style: {
        "background-image": "url('/assets/tailwind.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },

    {
      data: { id: "material-ui", label: "Material-UI", parent: "ui-libraries" },
      position: { x: 225, y: 300 },
      style: {
        "background-image": "url('/assets/mui.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },
    {
      data: { id: "core-ui", label: "Core-UI", parent: "ui-libraries" },
      position: { x: 275, y: 300 },
      style: {
        "background-image": "url('/assets/coreui.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },

    {
      data: { id: "js", label: "JavaScript" },
      position: { x: 400, y: 200 },
      style: {
        "background-image": "url('/assets/js.png')",
        "background-fit": "contain",
      },
    },

    {
      data: { id: "react", label: "React", parent: "jsts-libraries" },
      position: { x: 425, y: 300 },
      style: {
        "background-image": "url('/assets/react.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },
    {
      data: { id: "vue", label: "Vue", parent: "jsts-libraries" },
      position: { x: 475, y: 300 },
      style: {
        "background-image": "url('/assets/vue.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },

    {
      data: { id: "jquery", label: "JQuery", parent: "jsts-libraries" },
      position: { x: 525, y: 300 },
      style: {
        "background-image": "url('/assets/jquery.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },
    {
      data: { id: "nodejs", label: "NodeJS", parent: "jsts-libraries" },
      position: { x: 575, y: 300 },
      style: {
        "background-image": "url('/assets/nodejs.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },

    {
      data: { id: "jsts-libraries", label: "" },
      position: { x: 400, y: 400 },
      style: {
        width: 1,
        height: 1,
        // "border-color": "blue",
        "border-opacity": 0.5,
      },
    },

    {
      data: { id: "ts", label: "TypeScript" },
      position: { x: 600, y: 200 },
      style: {
        "background-image": "url('/assets/typescript.png')",
        "background-fit": "contain",
      },
    },
    {
      data: { id: "php", label: "PHP" },
      position: { x: 800, y: 200 },
      style: {
        "background-image": "url('/assets/php.png')",
        "background-fit": "contain",
      },
    },
    {
      data: { id: "laravel", label: "Laravel", parent: "php-lib" },
      position: { x: 800, y: 300 },
      style: {
        "background-image": "url('/assets/laravel.png')",
        "background-fit": "contain",
        width: 30,
        height: 30,
        "font-size": "10px",
      },
    },

    // Edges
    { data: { source: "skills", target: "html" } },
    { data: { source: "skills", target: "css" } },
    { data: { source: "skills", target: "js" } },
    { data: { source: "skills", target: "ts" } },
    { data: { source: "skills", target: "php" } },
    // {
    //   data: { id: "ui-css", source: "css", target: "ui-libraries" },
    // },
    // {
    //   data: { id: "js-lib", source: "js", target: "jsts-libraries" },
    // },
    // {
    //   data: { id: "ts-lib", source: "ts", target: "jsts-libraries" },
    // },
    // { data: { source: "css", target: "tailwind" } },
    // { data: { source: "css", target: "material-ui" } },
    // { data: { source: "css", target: "core-ui" } },
  ];

  useEffect(() => {
    if (cyRef.current) {
      cyRef.current.nodes().forEach((node) => {
        node.ungrabify();
        node.unselectify();
      });

      // Animate all edges after a short delay
      cyRef.current.edges().forEach((edge) => {
        edge.animate(
          {
            style: { opacity: 1 }, // Animate to visible
          },
          {
            duration: 1000, // Animation duration
            easing: "ease-in-out", // Easing function
          },
        );
      });
    }
  }, []);

  return (
    <CytoscapeComponent
      cy={(cy) => (cyRef.current = cy)} // Access the Cytoscape instance
      elements={elements}
      userPanningEnabled={false}
      userZoomingEnabled={false}
      style={{ width: "100%", height: "30vw" }}
      stylesheet={[
        {
          selector: "node",
          style: {
            // "background-color": "#007bff",
            "background-opacity": 0,
            label: "data(label)",
            "overlay-padding": "3px",
            color: "#007bff",
            "text-valign": "bottom",
            "text-halign": "center",
            "text-margin-y": 5,
            width: 50, // Increased width for padding effect
            height: 40, // Increased height for padding effect
            "font-size": "12px",
            shape: "rectangle", // Rounded rectangle for padding around the label
          },
        },
        {
          selector: "node[id='skills']",
          style: {
            width: 120,
            height: 120,
            color: "#FFF",
            "font-size": "24px",
            "background-color": "#0056b3",
            shape: "ellipse",
            "text-valign": "center",
            "text-halign": "center",
            "text-background-opacity": 0,
            "background-opacity": 1,
          },
        },
        {
          selector: "edge",
          style: {
            width: 1,
            "overlay-padding": 0,
            opacity: 0,
            "line-color": "#007bff",
            // "target-arrow-color": "#ccc",
            // "target-arrow-shape": "triangle",
          },
        },
        {
          selector: "edge[id='ui-css'], edge[id='js-lib'], edge[id='ts-lib']",
          style: {
            width: 1,
            "overlay-padding": 0,
            opacity: 0,
            "line-color": "#007bff",
            // "target-arrow-color": "#ccc",
            // "target-arrow-shape": "triangle",
          },
        },
      ]}
      layout={{ name: "preset" }}
    />
  );
};

export default SkillUi;
