/* @ds-bundle: {"format":4,"namespace":"NexoDesignSystem_7a6f50","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Ring","sourcePath":"components/core/Ring.jsx"},{"name":"ServiceIcon","sourcePath":"components/core/ServiceIcon.jsx"}],"sourceHashes":{"components/core/Button.jsx":"dd207e40a667","components/core/Card.jsx":"fdbebc46f124","components/core/Input.jsx":"18b2b990f6bc","components/core/Logo.jsx":"dc060e3474ca","components/core/Pill.jsx":"74291542f35a","components/core/Ring.jsx":"4b111777929e","components/core/ServiceIcon.jsx":"7e4aae06d4eb","ui_kits/social/Pieces.jsx":"0ee436905840","ui_kits/website/Sections.jsx":"809cd03ef15e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NexoDesignSystem_7a6f50 = window.NexoDesignSystem_7a6f50 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = "primary",
  size = "md",
  icon,
  children,
  style,
  ...rest
}) {
  const sz = {
    sm: ["8px 14px", 14],
    md: ["12px 20px", 15],
    lg: ["16px 28px", 16]
  }[size];
  const v = {
    primary: ["var(--nx-blue-deep)", "#fff", "transparent"],
    accent: ["var(--nx-blue-signal)", "#fff", "transparent"],
    secondary: ["transparent", "var(--nx-blue-deep)", "var(--nx-blue-deep)"],
    ghost: ["transparent", "var(--nx-blue-deep)", "transparent"],
    onDark: ["#fff", "var(--nx-blue-deep)", "transparent"]
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: sz[0],
      fontSize: sz[1],
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      background: v[0],
      color: v[1],
      border: "1.5px solid " + v[2],
      borderRadius: "var(--r-md)",
      cursor: rest.disabled ? "not-allowed" : "pointer",
      opacity: rest.disabled ? .45 : 1,
      transition: "opacity var(--dur) var(--ease), transform var(--dur) var(--ease)",
      ...style
    },
    onMouseDown: e => !rest.disabled && (e.currentTarget.style.transform = "scale(.98)"),
    onMouseUp: e => e.currentTarget.style.transform = "",
    onMouseLeave: e => e.currentTarget.style.transform = ""
  }), children, icon && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 18,
      height: 18,
      background: "currentColor",
      WebkitMask: "url(\"" + icon + "\") center/contain no-repeat",
      mask: "url(\"" + icon + "\") center/contain no-repeat"
    }
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  surface = "white",
  padding = 28,
  children,
  style
}) {
  const s = {
    white: ["#fff", "1px solid var(--border-1)", "var(--text-1)"],
    fog: ["var(--nx-fog)", "1px solid transparent", "var(--text-1)"],
    brand: ["var(--nx-blue-deep)", "1px solid transparent", "#fff"]
  }[surface];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: s[0],
      border: s[1],
      color: s[2],
      borderRadius: "var(--r-lg)",
      padding,
      boxSizing: "border-box",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  multiline,
  style,
  ...rest
}) {
  const f = {
    width: "100%",
    boxSizing: "border-box",
    padding: "12px 14px",
    font: "400 15px/1.4 var(--font-body)",
    color: "var(--text-1)",
    background: "#fff",
    border: "1.5px solid var(--border-1)",
    borderRadius: "var(--r-md)",
    outline: "none",
    resize: "vertical"
  };
  const On = e => {
      e.target.style.borderColor = "var(--nx-blue-signal)";
      e.target.style.boxShadow = "var(--focus-ring)";
    },
    Off = e => {
      e.target.style.borderColor = "";
      e.target.style.boxShadow = "";
    };
  const El = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 11px/1.2 var(--font-display)",
      letterSpacing: ".24em",
      textTransform: "uppercase",
      color: "var(--nx-blue-deep)"
    }
  }, label), /*#__PURE__*/React.createElement(El, _extends({}, rest, {
    style: f,
    onFocus: On,
    onBlur: Off,
    rows: multiline ? 4 : undefined
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = "square",
  size = 160,
  src = "assets/logo-n-nexo.png",
  style
}) {
  if (variant === "circle") return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Nexo Seguridad y Redes",
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid rgba(255,255,255,.85)",
      display: "block",
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Nexo Seguridad y Redes",
    style: {
      width: size,
      height: size,
      display: "block",
      borderRadius: variant === "icon" ? "22%" : 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
function Pill({
  tone = "soft",
  children,
  style
}) {
  const t = {
    soft: ["var(--nx-blue-signal-tint)", "var(--nx-blue-deep)", "transparent"],
    solid: ["var(--nx-blue-deep)", "#fff", "transparent"],
    outline: ["transparent", "var(--nx-blue-deep)", "var(--nx-blue-deep)"],
    onDark: ["transparent", "#fff", "rgba(255,255,255,.55)"]
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "7px 14px",
      borderRadius: 999,
      background: t[0],
      color: t[1],
      border: "1px solid " + t[2],
      font: "600 11px/1.2 var(--font-display)",
      letterSpacing: ".24em",
      textTransform: "uppercase",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/core/Ring.jsx
try { (() => {
function Ring({
  size = 520,
  top,
  right,
  bottom,
  left,
  tone = "dark",
  style
}) {
  const c = tone === "dark" ? ["var(--ring-on-dark)", "var(--ring-on-dark-soft)"] : ["var(--ring-on-light)", "var(--ring-on-light)"];
  const ring = (s, col, w) => /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: (size - s) / 2,
      borderRadius: "50%",
      border: w + "px solid " + col
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      width: size,
      height: size,
      top,
      right,
      bottom,
      left,
      pointerEvents: "none",
      ...style
    }
  }, ring(size, c[0], Math.max(2, size / 130)), ring(size * .74, c[1], 1.5), ring(size * .48, c[1], 1.5));
}
Object.assign(__ds_scope, { Ring });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ring.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceIcon.jsx
try { (() => {
const map = {
  camaras: "cctv",
  fibra: "cable",
  starlink: "satellite-dish",
  wifi: "wifi",
  telefono: "phone",
  ubicacion: "map-pin",
  flecha: "arrow-right",
  ok: "check",
  mensaje: "message-circle",
  escudo: "shield-check",
  mail: "mail",
  instagram: "instagram"
};
function ServiceIcon({
  name = "camaras",
  size = 56,
  tone = "blue",
  base = "assets/icons/",
  style
}) {
  const bg = tone === "white" ? "#fff" : tone === "signal" ? "var(--nx-blue-signal)" : "var(--nx-blue-deep)";
  const fg = tone === "white" ? "var(--nx-blue-deep)" : "#fff";
  const url = base + (map[name] || name) + ".svg";
  return /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": name,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: "22%",
      background: bg,
      flex: "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "54%",
      height: "54%",
      background: fg,
      WebkitMask: "url(" + url + ") center/contain no-repeat",
      mask: "url(" + url + ") center/contain no-repeat"
    }
  }));
}
Object.assign(__ds_scope, { ServiceIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceIcon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/Pieces.jsx
try { (() => {
const {
  Pill,
  ServiceIcon,
  Ring,
  Logo,
  Button
} = window.NexoDesignSystem_7a6f50;
const IC = "../../assets/icons/",
  LG = "../../assets/logo-n-nexo.png";
const Ph = ({
  label,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "repeating-linear-gradient(135deg,rgba(255,255,255,.14) 0 12px,rgba(255,255,255,.06) 12px 24px)",
    display: "grid",
    placeItems: "center",
    color: "#fff",
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "nx-label",
  style: {
    fontSize: 11,
    textAlign: "center",
    padding: 8
  }
}, label));
const Handle = ({
  dark
}) => /*#__PURE__*/React.createElement("span", {
  className: "nx-label",
  style: {
    fontSize: 10,
    color: dark ? "#fff" : "var(--nx-blue-deep)"
  }
}, "@nexo_seguridad");
const box = {
  width: 420,
  height: 420,
  position: "relative",
  overflow: "hidden",
  boxSizing: "border-box",
  flex: "none"
};
function PostServicio() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      background: "var(--surface-brand)",
      color: "#fff",
      padding: 36,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 360,
    right: -130,
    top: -110
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    base: IC,
    name: "camaras",
    size: 56,
    tone: "signal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "onDark"
  }, "Seguridad"))), /*#__PURE__*/React.createElement("h3", {
    className: "nx-h1",
    style: {
      position: "relative",
      margin: "auto 0 10px",
      fontSize: 36
    }
  }, "C\xE1maras de seguridad"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      margin: "0 0 20px",
      font: "400 16px/1.5 var(--font-body)"
    }
  }, "Mir\xE1 tu casa o tu comercio desde el celular, las 24 horas."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Handle, {
    dark: true
  }), /*#__PURE__*/React.createElement(Logo, {
    src: LG,
    variant: "circle",
    size: 40
  })));
}
function PostTrabajo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      background: "var(--nx-night)",
      color: "#fff",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: "Foto del trabajo \xB7 instalaci\xF3n",
    style: {
      flex: 1,
      background: "repeating-linear-gradient(135deg,#16305f 0 12px,#0f2250 12px 24px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 28px",
      display: "flex",
      alignItems: "center",
      gap: 16,
      background: "var(--surface-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "onDark",
    style: {
      fontSize: 10
    }
  }, "Instalaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    className: "nx-h3",
    style: {
      marginTop: 10,
      fontSize: 18
    }
  }, "Antena Starlink en zona rural")), /*#__PURE__*/React.createElement(Logo, {
    src: LG,
    variant: "circle",
    size: 44
  })));
}
function PostInstitucional() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...box,
      background: "#fff",
      color: "var(--nx-blue-deep)",
      padding: 40,
      display: "flex",
      flexDirection: "column",
      border: "1px solid var(--border-1)"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    tone: "light",
    size: 380,
    right: -150,
    bottom: -150
  }), /*#__PURE__*/React.createElement(Logo, {
    src: LG,
    size: 72,
    style: {
      position: "relative"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "nx-display",
    style: {
      position: "relative",
      margin: "auto 0 16px",
      fontSize: 42
    }
  }, "Tu casa conectada, tu negocio seguro."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    className: "nx-label"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10
    }
  }, "C\xE1maras \xB7 Fibra \xB7 Starlink \xB7 WiFi")));
}
function Historia() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 236,
      height: 420,
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-brand)",
      color: "#fff",
      padding: 22,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 300,
    right: -120,
    top: -60
  }), /*#__PURE__*/React.createElement(ServiceIcon, {
    base: IC,
    name: "wifi",
    size: 44,
    tone: "signal",
    style: {
      position: "relative"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    className: "nx-h1",
    style: {
      position: "relative",
      fontSize: 28,
      margin: "auto 0 10px"
    }
  }, "\xBFSe corta el WiFi en el fondo?"), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      margin: "0 0 16px",
      font: "400 14px/1.45 var(--font-body)"
    }
  }, "Llevamos la se\xF1al a cada rinc\xF3n de tu casa."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "#fff",
      color: "var(--nx-blue-deep)",
      borderRadius: 12,
      padding: "10px 14px",
      font: "600 13px var(--font-body)",
      textAlign: "center"
    }
  }, "Escribinos por DM"));
}
function CardFront() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      height: 220,
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-brand)",
      color: "#fff",
      borderRadius: 8,
      padding: 20,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 260,
    right: -100,
    bottom: -110
  }), /*#__PURE__*/React.createElement(Logo, {
    src: LG,
    variant: "circle",
    size: 72,
    style: {
      position: "relative"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      font: "500 13px var(--font-body)"
    }
  }, "Tu casa conectada, tu negocio seguro."));
}
function CardBack() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340,
      height: 220,
      background: "#fff",
      border: "1px solid var(--border-1)",
      borderRadius: 8,
      padding: 22,
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nx-h3",
    style: {
      color: "var(--nx-blue-deep)"
    }
  }, "Nombre Apellido"), /*#__PURE__*/React.createElement("div", {
    className: "nx-label",
    style: {
      fontSize: 10,
      marginTop: 6,
      color: "var(--nx-blue-signal)"
    }
  }, "T\xE9cnico instalador")), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "500 12.5px/1.8 var(--font-body)"
    }
  }, "54 9 0000 000000", /*#__PURE__*/React.createElement("br", null), "nombre@correo.com", /*#__PURE__*/React.createElement("br", null), "@nexo_seguridad", /*#__PURE__*/React.createElement("br", null), "Cruz del Eje, C\xF3rdoba"));
}
Object.assign(window, {
  PostServicio,
  PostTrabajo,
  PostInstitucional,
  Historia,
  CardFront,
  CardBack
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/Pieces.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  Button,
  Pill,
  ServiceIcon,
  Card,
  Input,
  Ring,
  Logo
} = window.NexoDesignSystem_7a6f50;
const IC = "../../assets/icons/",
  LG = "../../assets/logo-n-nexo.png";
const SERVICES = [{
  id: "camaras",
  pill: "Seguridad",
  t: "Cámaras de seguridad",
  d: "Instalación y configuración de sistemas de videovigilancia.",
  more: "Vas a ver tus cámaras desde el celular, las 24 horas. Para casas, comercios y empresas."
}, {
  id: "fibra",
  pill: "Conectividad",
  t: "Internet por fibra óptica",
  d: "Conexión estable y veloz para hogares y negocios.",
  more: "Una conexión que no se corta cuando más la necesitás, con instalación prolija."
}, {
  id: "starlink",
  pill: "Conectividad",
  t: "Antenas Starlink",
  d: "Internet satelital donde no llega el cable.",
  more: "Instalamos y orientamos la antena para que tengas señal en el campo o en zonas alejadas."
}, {
  id: "wifi",
  pill: "Conectividad",
  t: "Redes WiFi · Universo Net",
  d: "Cobertura WiFi completa en casas, comercios y empresas.",
  more: "Llevamos la señal a cada rincón, también al fondo de tu casa."
}];
const Ph = ({
  label,
  h = 320,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height: h,
    borderRadius: "var(--r-lg)",
    background: "repeating-linear-gradient(135deg,#E3EEFF 0 14px,#EEF2F8 14px 28px)",
    display: "grid",
    placeItems: "center",
    color: "var(--nx-blue-deep)",
    ...style
  }
}, /*#__PURE__*/React.createElement("span", {
  className: "nx-label"
}, label));
const wrap = {
  maxWidth: 1120,
  margin: "0 auto",
  padding: "0 32px",
  boxSizing: "border-box"
};
function Header({
  go
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 5,
      background: "rgba(255,255,255,.94)",
      borderBottom: "1px solid var(--border-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      alignItems: "center",
      gap: 32,
      height: 72
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: LG,
    variant: "circle",
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    className: "nx-label",
    style: {
      color: "var(--nx-blue-deep)"
    }
  }, "Nexo"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      marginLeft: "auto",
      font: "500 15px var(--font-body)"
    }
  }, [["servicios", "Servicios"], ["trabajos", "Trabajos"], ["contacto", "Contacto"]].map(([i, l]) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#" + i,
    onClick: e => {
      e.preventDefault();
      go(i);
    },
    style: {
      textDecoration: "none",
      color: "var(--text-1)"
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contacto")
  }, "Pedir presupuesto")));
}
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-brand)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 760,
    right: -220,
    top: -160
  }), /*#__PURE__*/React.createElement(Ring, {
    size: 420,
    left: -200,
    bottom: -260
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      padding: "96px 32px 104px"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    tone: "onDark"
  }, "Cruz del Eje \xB7 C\xF3rdoba"), /*#__PURE__*/React.createElement("h1", {
    className: "nx-display",
    style: {
      margin: "24px 0 20px",
      maxWidth: 720
    }
  }, "Tu casa conectada, tu negocio seguro."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 18px/1.55 var(--font-body)",
      maxWidth: 520,
      margin: "0 0 32px"
    }
  }, "Instalamos c\xE1maras de seguridad, fibra \xF3ptica, Starlink y redes WiFi. Trabajamos en el terreno y estamos cerca."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    icon: IC + "arrow-right.svg",
    onClick: () => go("contacto")
  }, "Pedir presupuesto"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,.6)"
    },
    onClick: () => go("servicios")
  }, "Ver servicios"))));
}
function Services() {
  const [sel, setSel] = React.useState("camaras");
  const s = SERVICES.find(x => x.id === sel);
  return /*#__PURE__*/React.createElement("section", {
    id: "servicios",
    style: {
      padding: "88px 0",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    className: "nx-label",
    style: {
      color: "var(--nx-blue-signal)"
    }
  }, "Servicios"), /*#__PURE__*/React.createElement("h2", {
    className: "nx-h1",
    style: {
      margin: "12px 0 36px",
      color: "var(--nx-blue-deep)"
    }
  }, "Conectamos y cuidamos lo que importa."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 16
    }
  }, SERVICES.map(x => /*#__PURE__*/React.createElement("button", {
    key: x.id,
    onClick: () => setSel(x.id),
    style: {
      all: "unset",
      cursor: "pointer",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    surface: sel === x.id ? "brand" : "fog",
    style: {
      height: "100%",
      transition: "background var(--dur) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    base: IC,
    name: x.id,
    size: 48,
    tone: sel === x.id ? "signal" : "blue"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nx-h3",
    style: {
      margin: "20px 0 8px"
    }
  }, x.t), /*#__PURE__*/React.createElement("div", {
    className: "nx-small",
    style: {
      opacity: sel === x.id ? 1 : .8
    }
  }, x.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      gap: 16,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, null, s.pill), /*#__PURE__*/React.createElement("p", {
    className: "nx-body",
    style: {
      margin: 0,
      flex: 1,
      minWidth: 240
    }
  }, s.more))));
}
function Work() {
  return /*#__PURE__*/React.createElement("section", {
    id: "trabajos",
    style: {
      padding: "88px 0",
      background: "var(--surface-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    className: "nx-label",
    style: {
      color: "var(--nx-blue-signal)"
    }
  }, "Trabajos"), /*#__PURE__*/React.createElement("h2", {
    className: "nx-h1",
    style: {
      margin: "12px 0 12px",
      color: "var(--nx-blue-deep)"
    }
  }, "Instalaciones reales, no fotos de cat\xE1logo."), /*#__PURE__*/React.createElement("p", {
    className: "nx-body",
    style: {
      margin: "0 0 32px",
      color: "var(--text-2)"
    }
  }, "Reemplaz\xE1 estos recuadros por fotos del trabajo en el terreno."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Ph, {
    label: "Foto \xB7 antena Starlink"
  }), /*#__PURE__*/React.createElement(Ph, {
    label: "Foto \xB7 c\xE1mara reci\xE9n instalada"
  }), /*#__PURE__*/React.createElement(Ph, {
    label: "Foto \xB7 t\xE9cnico en altura"
  }))));
}
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "88px 0",
      background: "var(--surface-brand)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    size: 520,
    right: -180,
    bottom: -220
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      position: "relative",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
      gap: 48,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "nx-label"
  }, "Contacto"), /*#__PURE__*/React.createElement("h2", {
    className: "nx-h1",
    style: {
      margin: "12px 0 16px"
    }
  }, "Contanos qu\xE9 necesit\xE1s."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "400 17px/1.55 var(--font-body)",
      margin: "0 0 24px"
    }
  }, "Te respondemos r\xE1pido y con nombre propio."), [["phone", "54 9 0000 000000"], ["instagram", "@nexo_seguridad"], ["map-pin", "Cruz del Eje, Córdoba"]].map(([i, t]) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      margin: "12px 0",
      font: "500 16px var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    base: IC,
    name: i,
    size: 36,
    tone: "white"
  }), t))), /*#__PURE__*/React.createElement(Card, {
    surface: "white",
    style: {
      color: "var(--text-1)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "24px 0"
    }
  }, /*#__PURE__*/React.createElement(ServiceIcon, {
    base: IC,
    name: "ok",
    size: 56,
    tone: "signal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "nx-h3",
    style: {
      marginTop: 16
    }
  }, "\xA1Listo! Te escribimos pronto."), /*#__PURE__*/React.createElement("div", {
    className: "nx-small",
    style: {
      color: "var(--text-2)",
      marginTop: 6
    }
  }, "Gracias por contactarnos.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tu nombre",
    placeholder: "Ej: Luc\xEDa",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Tu WhatsApp",
    placeholder: "54 9 \u2026",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Qu\xE9 necesit\xE1s",
    multiline: true,
    placeholder: "C\xE1maras para mi local, WiFi en el fondo de casa\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg"
  }, "Enviar consulta")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "#fff",
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      gap: 16,
      alignItems: "center",
      justifyContent: "space-between",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "nx-label"
  }, "Nexo Seguridad y Redes"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 14px var(--font-body)",
      opacity: .8
    }
  }, "Tu casa conectada, tu negocio seguro. \xB7 @nexo_seguridad")));
}
Object.assign(window, {
  Header,
  Hero,
  Services,
  Work,
  Contact,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Ring = __ds_scope.Ring;

__ds_ns.ServiceIcon = __ds_scope.ServiceIcon;

})();
