/* @ds-bundle: {"format":4,"namespace":"ZingDesignSystem_3ec979","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"ServiceRow","sourcePath":"components/data-display/ServiceRow.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tag","sourcePath":"components/feedback/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SegmentedControl","sourcePath":"components/navigation/SegmentedControl.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ef923a97c51c","components/buttons/IconButton.jsx":"253d995977ef","components/data-display/Avatar.jsx":"87d21b44370b","components/data-display/Card.jsx":"e615211abf62","components/data-display/ServiceRow.jsx":"975c3be44502","components/feedback/Badge.jsx":"6ba74e61b9b0","components/feedback/Dialog.jsx":"e3d364b2461a","components/feedback/Tag.jsx":"17e2bd3c2fc3","components/feedback/Toast.jsx":"8886c56efcb4","components/forms/Checkbox.jsx":"d57c422ba956","components/forms/Input.jsx":"f6b445d92363","components/forms/Radio.jsx":"0d56fb216757","components/forms/Select.jsx":"1f4da350801b","components/forms/Switch.jsx":"f986ab629836","components/forms/Textarea.jsx":"940badf1a191","components/navigation/SegmentedControl.jsx":"27441a635920","components/navigation/Tabs.jsx":"c4721f5095ea","export/zing-resident-app/app.jsx":"d802788b5381","export/zing-resident-app/components.jsx":"df9837b8557d","export/zing-resident-app/data.jsx":"50e0b40fdbb6","ui_kits/resident-app/app.jsx":"e815c297ae70","ui_kits/resident-scheduling/app.jsx":"f2f5a7ae76b7","ui_kits/resident-scheduling/components.jsx":"df9837b8557d","ui_kits/resident-scheduling/data.jsx":"50e0b40fdbb6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZingDesignSystem_3ec979 = window.ZingDesignSystem_3ec979 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zing Button — pill-shaped, calm, hospitality-grade.
 * Primary action uses the deep forest; secondary uses sage.
 */
function Button({
  variant = 'primary',
  size = 'md',
  block = false,
  icon = null,
  iconTrailing = null,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const classes = ['zg-btn', `zg-btn--${variant}`, size !== 'md' ? `zg-btn--${size}` : '', block ? 'zg-btn--block' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classes
  }, rest), icon, children && /*#__PURE__*/React.createElement("span", null, children), iconTrailing);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zing IconButton — a circular button for single-glyph actions.
 * Pass an SVG icon as children.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  className = '',
  children,
  ...rest
}) {
  const classes = ['zg-btn', 'zg-btn--icon', `zg-btn--${variant}`, size !== 'md' ? `zg-btn--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    className: classes
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing avatar — image or initials, sage by default. */
function Avatar({
  src,
  name = '',
  size = 'md',
  className = '',
  ...rest
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const classes = ['zg-avatar', size !== 'md' ? `zg-avatar--${size}` : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: classes
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing surface card. Optional media (image src) at top. */
function Card({
  variant = 'default',
  media,
  mediaAlt = '',
  interactive = false,
  className = '',
  children,
  ...rest
}) {
  const classes = ['zg-card', variant !== 'default' ? `zg-card--${variant}` : '', interactive ? 'zg-card--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), media && /*#__PURE__*/React.createElement("img", {
    className: "zg-card__media",
    src: media,
    alt: mediaAlt
  }), /*#__PURE__*/React.createElement("div", {
    className: "zg-card__body"
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/ServiceRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zing service / order row — an icon, a title + subtitle, and trailing meta.
 * The backbone of the resident menu and order summaries.
 */
function ServiceRow({
  icon,
  title,
  subtitle,
  meta,
  interactive = false,
  className = '',
  ...rest
}) {
  const classes = ['zg-row', interactive ? 'zg-row--interactive' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classes
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, subtitle)), meta != null && /*#__PURE__*/React.createElement("div", {
    className: "zg-row__meta"
  }, meta));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/** Zing status badge — small, uppercase, calm. */
function Badge({
  tone = 'sage',
  dot = false,
  className = '',
  children
}) {
  const toneClass = tone === 'sage' ? '' : `zg-badge--${tone}`;
  return /*#__PURE__*/React.createElement("span", {
    className: ['zg-badge', toneClass, className].filter(Boolean).join(' ')
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "zg-dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Zing dialog — a soft, rounded modal for confirmations.
 * Renders nothing when `open` is false.
 */
function Dialog({
  open = true,
  title,
  onClose,
  actions,
  className = '',
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ['zg-dialog', className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation()
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "zg-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "zg-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "zg-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing tag / chip — for filters and selections. Optionally removable or selectable. */
function Tag({
  selected = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['zg-tag', selected ? 'zg-tag--selected' : '', className].filter(Boolean).join(' ')
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const icons = {
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 12l5 5L20 7"
  }),
  bell: /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"
  }),
  sparkle: /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"
  })
};

/** Zing toast — a quiet confirmation on deep forest. */
function Toast({
  icon = 'check',
  accent = false,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['zg-toast', accent ? 'zg-toast--accent' : '', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-toast__icon"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, icons[icon] || icons.check)), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M5 12l5 5L20 7"
}));

/** Zing checkbox with label. */
function Checkbox({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['zg-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }, /*#__PURE__*/React.createElement(Check, null)), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing text input with optional label, hint and error state. */
function Input({
  label,
  hint,
  error,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `zg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "zg-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    className: ['zg-input', error ? 'zg-input--invalid' : '', className].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: ['zg-hint', error ? 'zg-hint--error' : ''].filter(Boolean).join(' ')
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing radio with label. Group by sharing the same `name`. */
function Radio({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['zg-check', 'zg-check--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing select dropdown. Pass <option>s as children, or an `options` array. */
function Select({
  label,
  hint,
  options,
  id,
  className = '',
  children,
  ...rest
}) {
  const inputId = id || (label ? `zg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "zg-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    className: ['zg-select', className].filter(Boolean).join(' ')
  }, rest), options ? options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  }) : children), hint && /*#__PURE__*/React.createElement("span", {
    className: "zg-hint"
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing toggle switch. Sage when on. */
function Switch({
  label,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['zg-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "zg-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "zg-label",
    style: {
      cursor: 'pointer'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Zing multi-line text area with optional label and hint. */
function Textarea({
  label,
  hint,
  id,
  className = '',
  ...rest
}) {
  const inputId = id || (label ? `zg-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    className: "zg-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "zg-label",
    htmlFor: inputId
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    className: ['zg-textarea', className].filter(Boolean).join(' ')
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    className: "zg-hint"
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentedControl.jsx
try { (() => {
/** Zing segmented control — a pill toggle for 2–3 short options. */
function SegmentedControl({
  items = [],
  value,
  defaultValue,
  onChange,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['zg-segment', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    onClick: () => select(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Zing underline tabs. Controlled via `value` + `onChange`, or uncontrolled. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  className = ''
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: ['zg-tabs', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    className: ['zg-tab', active === it.value ? 'zg-tab--active' : ''].filter(Boolean).join(' '),
    onClick: () => select(it.value)
  }, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/app.jsx
try { (() => {
/* Zing Resident App · hero task grid + floating availability bar that opens a
   dedicated full-page time picker.
   Tabs: Home · Your bookings · Profile.
   Home = browse tasks/packages (2-col grid, toggle) and add to cart; a compact
   bar hovers above the nav showing the running total + 5-day availability
   (green/red dot + tint). Tapping it opens a chrome-less booking page (back
   button only) to place the visit on the calendar and reserve. */
const {
  useState,
  useMemo,
  useEffect
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  startToday,
  addBusinessDays,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtDur,
  busyFor,
  snapValid,
  firstFit,
  fits,
  P,
  LineIcon,
  AppBar,
  BottomNav,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DayChips,
  TimelineLegend,
  Timeline
} = window;
const FREQS = ["One-time", "Weekly", "Bi-weekly", "Monthly"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK = 5;
const BUSINESS_DAYS = Array.from({
  length: 45
}, (_, i) => addBusinessDays(startToday(), i));
const FIVE = BUSINESS_DAYS.slice(0, 5);
const monthLabel = (a, b) => a.getMonth() === b.getMonth() ? `${MONTHS_FULL[a.getMonth()]} ${a.getFullYear()}` : `${MONTHS[a.getMonth()]} – ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
const titleOf = items => items.length === 1 ? items[0].name : `${items[0].name} + ${items.length - 1} more`;

/* ============================ Package detail sheet ============================ */
function PackageModal({
  pkg,
  added,
  onClose,
  onAdd
}) {
  const tasks = pkg.tasks.map(id => TASK_BY_ID[id]);
  const dur = tasks.reduce((s, t) => s + t.dur, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "/ visit")), /*#__PURE__*/React.createElement("div", {
    className: "sheet__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), " per visit"), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, "A curated bundle handled in one visit.", pkg.off ? " Save up to 15% on recurring orders." : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "2px 2px 18px"
    }
  }, tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + t.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, "~", fmtDur(t.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", t.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: () => onAdd(pkg)
  }, added ? "Remove from cart" : "Add package to cart")));
}

/* ============================ Floating availability bar ============================ */
function FloatingBar({
  cart,
  dayIdx,
  setDayIdx,
  onOpen
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);

  // Auto-track availability: always land on the earliest day that fits the current
  // visit. Adding tasks pushes forward past full days; removing tasks pulls back to
  // a sooner opening.
  useEffect(() => {
    if (dur === 0) return;
    const firstAvail = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    if (firstAvail >= 0 && firstAvail !== dayIdx) setDayIdx(firstAvail);
  }, [dur]);

  // 5-day preview window that always keeps the selected day in view.
  const winStart = dayIdx < WEEK ? 0 : Math.min(dayIdx, BUSINESS_DAYS.length - WEEK);
  const days = BUSINESS_DAYS.slice(winStart, winStart + WEEK);
  const date = BUSINESS_DAYS[dayIdx];
  const active = dur > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "fbar",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "fbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · Tap to pick a time` : "Add tasks to build a visit"))), /*#__PURE__*/React.createElement("div", {
    className: "fbar__day"
  }, /*#__PURE__*/React.createElement("b", null, fmtDayLabel(date)), /*#__PURE__*/React.createElement("span", null, fmtDateLabel(date)))), /*#__PURE__*/React.createElement(DayChips, {
    days: days,
    idx: dayIdx - winStart,
    onPick: i => {
      setDayIdx(winStart + i);
      onOpen();
    },
    dur: dur
  }));
}

/* ============================ Dedicated booking page ============================ */
function BookingPage({
  cart,
  dayIdx,
  setDayIdx,
  onBack,
  onReserve
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);
  const date = BUSINESS_DAYS[dayIdx];
  const busy = useMemo(() => busyFor(date), [dayIdx]);
  const [selStart, setSelStart] = useState(null);
  const [weekStart, setWeekStart] = useState(Math.floor(dayIdx / WEEK) * WEEK);
  const active = dur > 0;
  useEffect(() => {
    if (dur === 0) {
      setSelStart(null);
      return;
    }
    setSelStart(prev => prev != null && fits(busy, prev, dur) ? prev : firstFit(busy, dur));
  }, [dur, dayIdx]);
  const weekDays = BUSINESS_DAYS.slice(weekStart, weekStart + WEEK);
  const localSel = dayIdx - weekStart;
  const goWeek = delta => {
    const ns = weekStart + delta * WEEK;
    if (ns < 0 || ns >= BUSINESS_DAYS.length) return;
    setWeekStart(ns);
    setDayIdx(Math.min(BUSINESS_DAYS.length - 1, ns + dayIdx % WEEK));
  };
  const pick = raw => {
    const s = snapStart(busy, raw, dur);
    if (s != null) setSelStart(s);
  };
  const nudge = d => {
    if (selStart == null) return;
    const n = selStart + d;
    if (fits(busy, n, dur)) setSelStart(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Pick your time")), /*#__PURE__*/React.createElement("div", {
    className: "visitbar",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__ring"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 30,
    sw: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · one visit` : "Add tasks on the home screen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "weeknav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(-1),
    disabled: weekStart === 0,
    "aria-label": "Previous week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "weeknav__label"
  }, /*#__PURE__*/React.createElement("b", null, monthLabel(weekDays[0], weekDays[weekDays.length - 1])), /*#__PURE__*/React.createElement("span", null, weekStart === 0 ? "This week" : `${MONTHS[weekDays[0].getMonth()]} ${weekDays[0].getDate()} – ${MONTHS[weekDays[weekDays.length - 1].getMonth()]} ${weekDays[weekDays.length - 1].getDate()}`)), /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(1),
    disabled: weekStart + WEEK >= BUSINESS_DAYS.length,
    "aria-label": "Next week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  }))), /*#__PURE__*/React.createElement(DayChips, {
    days: weekDays,
    idx: localSel,
    onPick: i => setDayIdx(weekStart + i),
    dur: dur,
    variant: "page"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(TimelineLegend, {
    booking: active
  }), active && /*#__PURE__*/React.createElement("div", {
    className: "pickcue"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 15
  }), " Tap an open slot or drag your visit to set a time"), !active && /*#__PURE__*/React.createElement("div", {
    className: "bookhint"
  }, "Add a task on the home screen to reserve \u2014 you can still preview open slots below."))), /*#__PURE__*/React.createElement("div", {
    className: "bookcal"
  }, /*#__PURE__*/React.createElement("div", {
    key: dayIdx,
    className: "slide-anim"
  }, /*#__PURE__*/React.createElement(Timeline, {
    busy: busy,
    dur: active ? dur : null,
    selStart: active ? selStart : null,
    onPick: active ? pick : null,
    onDragStart: active ? pick : null,
    showOpen: true
  })), active && selStart == null && /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper__lbl"
  }, "No open block fits this visit \u2014 try another day (red = full)."))), /*#__PURE__*/React.createElement("div", {
    className: "stickyfoot stickyfoot--page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: active && selStart == null,
    onClick: () => active ? onReserve({
      date,
      start: selStart,
      dur
    }) : onBack()
  }, active ? selStart != null ? `Continue – ${fmtTime(selStart)} to ${fmtTime(selStart + dur)}` : "Pick a time on the calendar" : "Add a task to reserve")));
}

/* ============================ Faux Apple Pay sheet ============================ */
const FACE_ID = "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2";
function ApplePaySheet({
  amount,
  onCancel,
  onDone
}) {
  const [stage, setStage] = useState("auth");
  useEffect(() => {
    const t = setTimeout(() => setStage("ok"), 1700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (stage === "ok") {
      const t = setTimeout(onDone, 950);
      return () => clearTimeout(t);
    }
  }, [stage]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ap-scrim",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-head"
  }, /*#__PURE__*/React.createElement("b", null, "Apple Pay"), /*#__PURE__*/React.createElement("button", {
    className: "ap-x",
    onClick: onCancel
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic"
  }, "ZING"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Zing \xB7 Bezel Miami"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Apartment 1925"))), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic",
    style: {
      background: "linear-gradient(135deg,#1a1a2e,#39507a)"
    }
  }, "VISA"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Visa  \xB7\xB7\xB7\xB7  4242"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Default Card")), /*#__PURE__*/React.createElement("span", {
    className: "ap-row__chev"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row ap-row--total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Pay Zing")), /*#__PURE__*/React.createElement("div", {
    className: "ap-amt"
  }, "$", amount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "ap-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-face" + (stage === "ok" ? " ap-face--ok" : "")
  }, stage === "ok" ? /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 26,
    sw: 2.4
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: FACE_ID
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10v1.2M15 10v1.2M12 10v2.6l-1 .8M9.6 15.2c.7.6 1.5.9 2.4.9s1.7-.3 2.4-.9"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-cta"
  }, stage === "ok" ? "Done" : "Double-Click to Pay"))));
}

/* ============================ Checkout ============================ */
const ENTRY_OPTS = ["I'll be home", "The door's unlocked — come on in", "Use the Zing Access Station"];
const FREQ_SUB = {
  "One-time": "",
  "Weekly": "Save 15%",
  "Bi-weekly": "Save 10%",
  "Monthly": "Save 5%"
};
const FREQ_OFF = {
  "One-time": 0,
  "Weekly": 0.15,
  "Bi-weekly": 0.10,
  "Monthly": 0.05
};
function Checkout({
  cart,
  booking,
  freq,
  setFreq,
  onBack,
  onPlaceOrder
}) {
  const subtotal = cart.reduce((s, c) => s + c.price, 0);
  const [tip, setTip] = useState({
    mode: "pct",
    pct: 18
  });
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [entry, setEntry] = useState("");
  const [notes, setNotes] = useState("");
  const [pay, setPay] = useState("apple");
  const [card, setCard] = useState({
    num: "",
    exp: "",
    cvc: "",
    zip: ""
  });
  const [apOpen, setApOpen] = useState(false);
  const tipAmt = tip.mode === "pct" ? Math.round(subtotal * tip.pct) / 100 : tip.mode === "custom" ? parseFloat(tip.custom) || 0 : 0;
  const planOff = Math.round(subtotal * FREQ_OFF[freq] * 100) / 100;
  const discount = applied ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  const total = Math.max(0, subtotal - planOff - discount + tipAmt);
  const cardOk = card.num.replace(/\s/g, "").length >= 12 && card.exp.length >= 4 && card.cvc.length >= 3;
  const ready = entry !== "" && (pay === "apple" || cardOk);
  const place = () => onPlaceOrder({
    tip: tipAmt,
    discount,
    total,
    freq,
    entry,
    notes,
    pay: pay === "apple" ? "Apple Pay" : "Visa ····4242"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cohead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Last step")), /*#__PURE__*/React.createElement("div", {
    className: "recap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__t"
  }, fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " \xB7 ", fmtTime(booking.start), "\u2013", fmtTime(booking.start + booking.dur)), /*#__PURE__*/React.createElement("div", {
    className: "recap__s"
  }, cart.length, " ", cart.length === 1 ? "task" : "tasks", " \xB7 ~", fmtDur(booking.dur), " \xB7 Bezel Miami 1925")))), /*#__PURE__*/React.createElement("div", {
    className: "cobody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 17
  }), " How often?"), /*#__PURE__*/React.createElement("div", {
    className: "freqgrid"
  }, FREQS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: freq === f ? "freqgrid__on" : "",
    onClick: () => setFreq(f)
  }, f, FREQ_SUB[f] ? /*#__PURE__*/React.createElement("span", {
    className: "freqgrid__sub"
  }, FREQ_SUB[f]) : null)))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (entry ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.home,
    w: 17
  }), " How will we get in?"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "selectwrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: entry,
    onChange: e => setEntry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option\u2026"), ENTRY_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Any entry or special instructions?"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Knock before entering, friendly dog inside\u2026",
    value: notes,
    onChange: e => setNotes(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (tip.mode !== "none" && (tip.mode === "pct" || tipAmt > 0) ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 17
  }), " Add a tip for your Zing cleaner"), /*#__PURE__*/React.createElement("div", {
    className: "tiprow"
  }, [15, 18, 20].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: "tipbtn" + (tip.mode === "pct" && tip.pct === p ? " tipbtn--on" : ""),
    onClick: () => setTip({
      mode: "pct",
      pct: p
    })
  }, p, "%", /*#__PURE__*/React.createElement("small", null, "$", (Math.round(subtotal * p) / 100).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    className: "tipcustom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipcustom__wrap"
  }, /*#__PURE__*/React.createElement("span", null, "$"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    placeholder: "Add a custom amount",
    value: tip.mode === "custom" ? tip.custom || "" : "",
    onChange: e => setTip({
      mode: "custom",
      custom: e.target.value.replace(/[^0-9.]/g, "")
    })
  }))), /*#__PURE__*/React.createElement("button", {
    className: "notip" + (tip.mode === "none" ? " notip--on" : ""),
    onClick: () => setTip({
      mode: "none"
    })
  }, "No tip")), /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 17
  }), " Payment"), /*#__PURE__*/React.createElement("div", {
    className: "paymethod"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "apple" ? " payopt--on" : ""),
    onClick: () => setPay("apple")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Apple Pay"), /*#__PURE__*/React.createElement("span", {
    className: "payopt__hint"
  }, "Fastest")), /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "card" ? " payopt--on" : ""),
    onClick: () => setPay("card")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, "Credit or debit card"))), pay === "card" && /*#__PURE__*/React.createElement("div", {
    className: "cardform"
  }, /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Card number",
    inputMode: "numeric",
    value: card.num,
    onChange: e => setCard({
      ...card,
      num: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "MM / YY",
    inputMode: "numeric",
    value: card.exp,
    onChange: e => setCard({
      ...card,
      exp: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "CVC",
    inputMode: "numeric",
    value: card.cvc,
    onChange: e => setCard({
      ...card,
      cvc: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Billing ZIP",
    inputMode: "numeric",
    value: card.zip,
    onChange: e => setCard({
      ...card,
      zip: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (applied ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 17
  }), " Have a coupon code?"), /*#__PURE__*/React.createElement("div", {
    className: "coupon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter coupon code",
    value: coupon,
    onChange: e => setCoupon(e.target.value.toUpperCase())
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !coupon.trim(),
    onClick: () => setApplied(coupon.trim())
  }, "Apply")), applied && /*#__PURE__*/React.createElement("div", {
    className: "coupon__ok"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 15,
    sw: 2
  }), " \u201C", applied, "\u201D applied \xB7 10% off")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, "$", subtotal.toFixed(2))), planOff > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, freq, " plan (", Math.round(FREQ_OFF[freq] * 100), "% off)"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", planOff.toFixed(2))), discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", discount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Tip", tip.mode === "pct" ? ` (${tip.pct}%)` : ""), /*#__PURE__*/React.createElement("b", null, "$", tipAmt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", total.toFixed(2)))), pay === "apple" ? /*#__PURE__*/React.createElement("button", {
    className: "applebtn",
    disabled: !ready,
    style: !ready ? {
      opacity: .45
    } : null,
    onClick: () => ready && setApOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Pay") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: !ready,
    onClick: place
  }, "Place order \xB7 $", total.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11.5,
      color: "var(--ink-500)",
      marginTop: 12,
      lineHeight: 1.5
    }
  }, "You won't be charged until your visit is complete. We'll text you to confirm timing.")), apOpen && /*#__PURE__*/React.createElement(ApplePaySheet, {
    amount: total,
    onCancel: () => setApOpen(false),
    onDone: () => {
      setApOpen(false);
      place();
    }
  }));
}

/* ============================ Info sheet (task / package description) ============================ */
function InfoSheet({
  item,
  onClose
}) {
  const isPkg = !!item.tasks;
  const tasks = isPkg ? item.tasks.map(id => TASK_BY_ID[id]).filter(Boolean) : [];
  const dur = isPkg ? tasks.reduce((s, t) => s + t.dur, 0) : item.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + item.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), isPkg ? " / visit" : ""), /*#__PURE__*/React.createElement("span", {
    className: "sheet__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, isPkg ? `$${item.price} / visit` : `From $${item.price}`)), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, item.desc), isPkg && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "What's included"), tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__dot"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 12,
    sw: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(t.dur)))), item.off && /*#__PURE__*/React.createElement("div", {
    className: "infolist__save"
  }, "Save up to 15% on recurring orders")), !isPkg && item.steps && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "Options"), item.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(s.dur)), /*#__PURE__*/React.createElement("span", {
    className: "infolist__price"
  }, "$", s.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    onClick: onClose,
    style: {
      marginTop: 4
    }
  }, "Got it")));
}

/* ============================ Home (hero grid + floating bar) ============================ */
function Home({
  cart,
  dayIdx,
  setDayIdx,
  onTaskClick,
  onStep,
  onInfo,
  onTogglePkg,
  onOpenBooking
}) {
  const [mode, setMode] = useState("tasks");
  const itemBy = Object.fromEntries(cart.map(c => [c.taskId, c]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim",
    style: {
      paddingBottom: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hi"
  }, "Hello, Whit ", /*#__PURE__*/React.createElement("span", {
    className: "wave"
  }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("h1", null, "Book your clean.")), /*#__PURE__*/React.createElement(Segmented, {
    mode: mode,
    setMode: setMode
  }), mode === "tasks" ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, TASKS.map(t => /*#__PURE__*/React.createElement(TaskCard, {
    key: t.id,
    task: t,
    item: itemBy[t.id],
    onToggle: onTaskClick,
    onStep: onStep,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Create Custom Task",
    sub: "Tell us what you need",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "blurb"
  }, "Save time, skip the guesswork. Choose a pre-built bundle that fits your routine and let Zing handle the rest."), /*#__PURE__*/React.createElement("div", {
    className: "pgrid"
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(PackageCard, {
    key: p.id,
    pkg: p,
    inCart: p.tasks.every(id => itemBy[id]),
    onToggle: onTogglePkg,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Build Custom Package",
    sub: "Choose your own tasks",
    onClick: () => setMode("tasks")
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  }))))), /*#__PURE__*/React.createElement(FloatingBar, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onOpen: onOpenBooking
  }));
}

/* ============================ Your bookings ============================ */
function bookingRow(b, done) {
  const d = b.date;
  return /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming" + (done ? " upcoming--done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("span", null, MONTHS[d.getMonth()])), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, fmtDayLabel(d), " \xB7 ", fmtTime(b.start), " \u2013 ", fmtTime(b.start + b.dur))), /*#__PURE__*/React.createElement("span", {
    className: "vtag" + (done ? " vtag--done" : "")
  }, done ? "Done" : b.freq === "One-time" ? "Booked" : b.freq));
}
function Bookings({
  bookings,
  onBrowse
}) {
  const subs = bookings.filter(b => b.freq !== "One-time");
  const completed = [{
    id: "c1",
    title: "Vacuum & Floor Magic",
    date: addBusinessDays(startToday(), -6),
    start: 600,
    dur: 40,
    freq: "One-time"
  }, {
    id: "c2",
    title: "Zing Bathroom Clean (Full) + 1 more",
    date: addBusinessDays(startToday(), -11),
    start: 540,
    dur: 75,
    freq: "Weekly"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your bookings"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  }), " Upcoming visits"), bookings.length ? bookings.map(b => bookingRow(b, false)) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No upcoming visits."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Book a clean \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 18
  }), " Subscriptions"), subs.length ? subs.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, b.freq, " \xB7 next ", fmtDayLabel(b.date), " ", fmtDateLabel(b.date))), /*#__PURE__*/React.createElement("span", {
    className: "vtag"
  }, b.freq))) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No recurring services yet."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Set up a routine \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 18
  }), " Completed visits"), completed.map(b => bookingRow(b, true)))));
}

/* ============================ Confirmation ============================ */
function Confirm({
  booking,
  onDone
}) {
  const subtotal = booking.items.reduce((s, c) => s + c.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm__badge"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 38,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h2", null, "You're all set."), /*#__PURE__*/React.createElement("p", null, "Your Zing visit is reserved for ", fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " from ", fmtTime(booking.start), " to ", fmtTime(booking.start + booking.dur), ". We'll take it from here.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 18
  }), " Your visit"), booking.items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.uid,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + c.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, c.opt ? `${c.opt} · ` : "", "~", fmtDur(c.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", c.price)))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, fmtDayLabel(booking.date), " ", fmtDateLabel(booking.date))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("b", null, fmtTime(booking.start), " \u2013 ", fmtTime(booking.start + booking.dur))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Frequency"), /*#__PURE__*/React.createElement("b", null, booking.freq)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, "Bezel Miami \xB7 1925")), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", subtotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: onDone
  }, "Book another clean")));
}

/* ============================ Profile ============================ */
function Profile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your profile"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.user,
    w: 18
  }), " Personal information"), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "Whit"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Phone number"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "770 656 0139"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Apartment"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "Bezel Miami \xB7 1925"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Pets info"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    placeholder: "e.g. friendly dog, please keep the bedroom door closed"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    style: {
      marginTop: 4
    }
  }, "Save changes")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 18
  }), " Payment methods"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-600)",
      margin: "0 0 14px"
    }
  }, "You have no saved cards."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block"
  }, "Add new card")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--danger btn--block"
  }, "Log out")));
}

/* ============================ App ============================ */
function App() {
  const [tab, setTab] = useState("home");
  const [view, setView] = useState("app"); // "app" | "booking" | "checkout"
  const [dayIdx, setDayIdx] = useState(0);
  const [cart, setCart] = useState([]);
  const [freq, setFreq] = useState("One-time");
  const [pending, setPending] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [infoItem, setInfoItem] = useState(null);
  const cartIds = new Set(cart.map(c => c.taskId));
  const mkItem = (t, stepIdx = 0) => {
    const s = t.steps ? t.steps[stepIdx] : null;
    return {
      uid: t.id,
      taskId: t.id,
      name: t.name,
      price: s ? s.price : t.price,
      dur: s ? s.dur : t.dur,
      icon: t.icon,
      stepIdx,
      opt: s ? s.label : null,
      note: ""
    };
  };
  const onTaskClick = task => {
    if (cartIds.has(task.id)) {
      setCart(c => c.filter(x => x.taskId !== task.id));
      return;
    }
    setCart(c => [...c, mkItem(task)]);
  };
  const stepItem = (task, delta) => setCart(c => c.map(x => {
    if (x.taskId !== task.id) return x;
    const i = Math.max(0, Math.min(task.steps.length - 1, x.stepIdx + delta));
    const s = task.steps[i];
    return {
      ...x,
      stepIdx: i,
      dur: s.dur,
      price: s.price,
      opt: s.label
    };
  }));
  const togglePkg = pkg => {
    const allIn = pkg.tasks.every(id => cartIds.has(id));
    if (allIn) setCart(c => c.filter(x => !pkg.tasks.includes(x.taskId)));else setCart(c => [...c, ...pkg.tasks.filter(id => !cartIds.has(id)).map(id => mkItem(TASK_BY_ID[id]))]);
  };
  const reserve = b => {
    setPending(b);
    setView("checkout");
  };
  const placeOrder = extra => {
    const booking = {
      id: "b" + Date.now(),
      ...pending,
      items: cart,
      freq,
      title: titleOf(cart),
      ...extra
    };
    setBookings(list => [booking, ...list]);
    setConfirmed(booking);
    setPending(null);
    setView("app");
  };
  const done = () => {
    setCart([]);
    setFreq("One-time");
    setConfirmed(null);
    setPending(null);
    setView("app");
    setTab("bookings");
  };
  const goTab = t => {
    setConfirmed(null);
    setView("app");
    setTab(t);
  };
  const chromeless = (view === "booking" || view === "checkout") && !confirmed;
  let body;
  if (confirmed) body = /*#__PURE__*/React.createElement(Confirm, {
    booking: confirmed,
    onDone: done
  });else if (view === "checkout") body = /*#__PURE__*/React.createElement(Checkout, {
    cart: cart,
    booking: pending,
    freq: freq,
    setFreq: setFreq,
    onBack: () => setView("booking"),
    onPlaceOrder: placeOrder
  });else if (view === "booking") body = /*#__PURE__*/React.createElement(BookingPage, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onBack: () => setView("app"),
    onReserve: reserve
  });else if (tab === "bookings") body = /*#__PURE__*/React.createElement(Bookings, {
    bookings: bookings,
    onBrowse: () => goTab("home")
  });else if (tab === "profile") body = /*#__PURE__*/React.createElement(Profile, null);else body = /*#__PURE__*/React.createElement(Home, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onTaskClick: onTaskClick,
    onStep: stepItem,
    onInfo: setInfoItem,
    onTogglePkg: togglePkg,
    onOpenBooking: () => setView("booking")
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, !chromeless && /*#__PURE__*/React.createElement(AppBar, null), body, !chromeless && /*#__PURE__*/React.createElement(BottomNav, {
    tab: confirmed ? "bookings" : tab,
    setTab: goTab
  })), infoItem && /*#__PURE__*/React.createElement(InfoSheet, {
    item: infoItem,
    onClose: () => setInfoItem(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/app.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/components.jsx
try { (() => {
/* Zing Resident App · shared components (chrome, cards, timeline) */
const {
  useState,
  useRef
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  px,
  totalHeight,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  openWindows,
  busyFor,
  firstFit,
  startToday,
  P,
  LineIcon
} = window;

/* ---------------- App bar (co-brand + Text us) ---------------- */
function AppBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cobrand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "zing",
    src: "icons/zing-logo.svg",
    alt: "Zing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bezel",
    src: "icons/bezel.webp",
    alt: "Bezel Miami"
  })), /*#__PURE__*/React.createElement("button", {
    className: "textus"
  }, "Text us"));
}

/* ---------------- Bottom navigation ---------------- */
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Home",
    d: P.home
  }, {
    id: "bookings",
    label: "Your bookings",
    d: P.cal
  }, {
    id: "profile",
    label: "Profile",
    d: P.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: tab === it.id ? "on" : "",
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: it.d,
    w: 23
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ---------------- Compact swipeable date strip (arrows + chips) ---------------- */
function DateStrip({
  days,
  idx,
  setIdx
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const trackRef = useRef(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const chip = el.children[idx];
    if (chip) el.scrollTo({
      left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth"
    });
  }, [idx]);
  return /*#__PURE__*/React.createElement("div", {
    className: "datestrip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.max(0, idx - 1)),
    disabled: idx === 0,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "datestrip__track",
    ref: trackRef
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dchip" + (i === idx ? " dchip--on" : ""),
    onClick: () => setIdx(i)
  }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate())))), /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.min(days.length - 1, idx + 1)),
    disabled: idx === days.length - 1,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  })));
}

/* ---------------- Tasks / Packages segmented ---------------- */
function Segmented({
  mode,
  setMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "tasks",
    onClick: () => setMode("tasks")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 20
  })), " Tasks"), /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "packages",
    onClick: () => setMode("packages")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 19
  })), " Packages"));
}

/* ---------------- Task card (with on-card stepper for count-based tasks) ---------------- */
function TaskCard({
  task,
  item,
  onToggle,
  onStep,
  onInfo
}) {
  const inCart = !!item;
  const stepped = inCart && task.steps;
  const price = stepped ? task.steps[item.stepIdx].price : task.price;
  const dur = stepped ? task.steps[item.stepIdx].dur : task.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard" + (inCart ? " in-cart" : ""),
    onClick: () => {
      if (inCart && task.steps) return;
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(task);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: inCart && task.steps ? P.close : P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__icon" + (/\.png$/.test(task.icon) ? " tcard__icon--photo" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + task.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, task.name), stepped ? /*#__PURE__*/React.createElement("div", {
    className: "qstep",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, -1),
    disabled: item.stepIdx === 0,
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "qstep__lbl"
  }, task.steps[item.stepIdx].label), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, 1),
    disabled: item.stepIdx === task.steps.length - 1,
    "aria-label": "More"
  }, "+")) : null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__dur"
  }, "~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "tcard__price"
  }, "$", price));
}
function GhostCard({
  icon,
  title,
  sub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard tcard--ghost",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__plus"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tcard__sub"
  }, sub));
}

/* ---------------- Package card ---------------- */
function PackageCard({
  pkg,
  inCart,
  onToggle,
  onInfo
}) {
  const dur = pkg.tasks.reduce((s, id) => s + (TASK_BY_ID[id] ? TASK_BY_ID[id].dur : 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "pcard" + (inCart ? " in-cart" : ""),
    onClick: () => onToggle(pkg)
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(pkg);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(pkg);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + pkg.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__name"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "pcard__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 12
  }), " ~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "pcard__starting"
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    className: "pcard__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("small", null, "/ visit")), pkg.off && /*#__PURE__*/React.createElement("div", {
    className: "pcard__off"
  }, "Up to 15% off for Weekly,", /*#__PURE__*/React.createElement("br", null), "Bi-Weekly, Monthly orders"));
}

/* ---------------- Date navigator ---------------- */
function DateNav({
  date,
  onPrev,
  onNext,
  canPrev,
  canNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "datenav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onPrev,
    disabled: !canPrev,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "datenav__label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "datenav__day"
  }, fmtDayLabel(date)), /*#__PURE__*/React.createElement("div", {
    className: "datenav__date"
  }, fmtDateLabel(date))), /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onNext,
    disabled: !canNext,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 20
  })));
}

/* ---------------- Week strip (5 business days) ---------------- */
function WeekStrip({
  days,
  activeKey,
  onPick,
  freeness
}) {
  const DOW = ["S", "M", "T", "W", "T", "F", "S"];
  return /*#__PURE__*/React.createElement("div", {
    className: "weekstrip"
  }, days.map(d => {
    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "wchip" + (k === activeKey ? " wchip--on" : ""),
      onClick: () => onPick(d)
    }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("i", {
      className: "wchip__free"
    }));
  }));
}

/* ---------------- Day chips (rounded, availability dot left of label) ---------------- */
function DayChips({
  days,
  idx,
  onPick,
  dur,
  variant
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayKey = startToday().toDateString();
  return /*#__PURE__*/React.createElement("div", {
    className: "fdays" + (variant === "page" ? " fdays--page" : "")
  }, days.map((d, i) => {
    let cls = "fchip";
    if (dur > 0) cls += firstFit(busyFor(d), dur) != null ? " fchip--free" : " fchip--full";
    if (i === idx) cls += " fchip--on";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      onClick: e => {
        e.stopPropagation();
        onPick(i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fchip__top"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fchip__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fchip__dow"
    }, d.toDateString() === todayKey ? "Today" : DOW[d.getDay()])), /*#__PURE__*/React.createElement("b", {
      className: "fchip__num"
    }, d.getDate()));
  }));
}

/* ---------------- Timeline legend ---------------- */
function TimelineLegend({
  booking
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tlhint"
  }, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--free"
  }), " Open"), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--busy"
  }), " Booked"), booking && /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--sel"
  }), " Your visit"));
}

/* ---------------- The day timeline ---------------- */
function Timeline({
  busy,
  dur,
  selStart,
  onPick,
  onDragStart,
  showOpen
}) {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const hours = [];
  for (let h = DAY_START / 60; h <= DAY_END / 60; h++) hours.push(h);
  const handleTap = e => {
    if (!onPick) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const minutes = DAY_START + y / HOUR_PX * 60;
    onPick(minutes);
  };
  const selDown = e => {
    if (!onDragStart) return;
    e.stopPropagation();
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    dragRef.current = {
      grab: py - px(selStart)
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };
  const selMove = e => {
    if (!dragRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const startMin = DAY_START + (py - dragRef.current.grab) / HOUR_PX * 60;
    onDragStart(startMin);
  };
  const selUp = () => {
    dragRef.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-gutter",
    style: {
      height: totalHeight
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "hr",
    style: {
      top: px(h * 60)
    }
  }, fmtTimeShort(h * 60)))), /*#__PURE__*/React.createElement("div", {
    className: "tl-track",
    ref: trackRef,
    style: {
      height: totalHeight
    },
    onClick: handleTap
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: "g" + h,
    className: "tl-grid",
    style: {
      top: px(h * 60)
    }
  })), hours.slice(0, -1).map(h => /*#__PURE__*/React.createElement("div", {
    key: "gh" + h,
    className: "tl-grid tl-grid--half",
    style: {
      top: px(h * 60 + 30)
    }
  })), showOpen && openWindows(busy).filter(w => w.end - w.start >= 30).map((w, i) => {
    const h = px(w.end) - px(w.start);
    const covered = selStart != null && dur != null && selStart < w.end && selStart + dur > w.start;
    return /*#__PURE__*/React.createElement("div", {
      key: "o" + i,
      className: "tl-open",
      style: {
        top: px(w.start),
        height: h - 3
      }
    }, h >= 26 && !covered && /*#__PURE__*/React.createElement("span", {
      className: "tl-open__lbl"
    }, "Open \xB7 ", fmtDur(w.end - w.start)));
  }), busy.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: "b" + i,
    className: "tl-busy",
    style: {
      top: px(b.start),
      height: px(b.end) - px(b.start) - 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__lbl"
  }, b.label), px(b.end) - px(b.start) > 34 && /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__sub"
  }, fmtTimeShort(b.start), "\u2013", fmtTimeShort(b.end), " \xB7 ", b.unit))), selStart != null && dur != null && /*#__PURE__*/React.createElement("div", {
    className: "tl-sel" + (onDragStart ? " tl-sel--drag" : ""),
    style: {
      top: px(selStart),
      height: px(selStart + dur) - px(selStart) - 3
    },
    onPointerDown: selDown,
    onPointerMove: selMove,
    onPointerUp: selUp,
    onPointerCancel: selUp
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__time"
  }, fmtTime(selStart), " \u2013 ", fmtTime(selStart + dur)), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__dur"
  }, onDragStart ? "Click or drag \u00b7 " : "", fmtDur(dur)), /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--bot"
  }))));
}
Object.assign(window, {
  AppBar,
  BottomNav,
  DateStrip,
  DayChips,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DateNav,
  WeekStrip,
  TimelineLegend,
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/components.jsx", error: String((e && e.message) || e) }); }

// export/zing-resident-app/data.jsx
try { (() => {
/* Zing Resident App · data + helpers + line icons
   Exposed on window for the other Babel scripts. */

const ICONS = "icons/";

/* ---- Service catalogue (matches the live Tasks menu) ---- */
const TASKS = [{
  id: "bathroom",
  name: "Zing Bathroom Clean (Full)",
  price: 35,
  dur: 45,
  icon: "bathroom.webp",
  desc: "Making bathrooms sparkle like a 5-star hotel. Toilet + sink scrub, shower & tub scrub, floors swept and mopped, mirrors wiped, surfaces disinfected and trash emptied.",
  opt: {
    label: "How many bathrooms?",
    noun: "bathrooms"
  },
  steps: [{
    label: "1 bathroom",
    dur: 45,
    price: 35
  }, {
    label: "2 bathrooms",
    dur: 75,
    price: 60
  }, {
    label: "3 bathrooms",
    dur: 105,
    price: 85
  }]
}, {
  id: "floor",
  name: "Vacuum & Floor Magic",
  price: 40,
  dur: 40,
  icon: "floor_magic.webp",
  desc: "A full-apartment vacuum and mop. Floors left spotless, streak-free and quietly fresh.",
  opt: {
    label: "Apartment size",
    noun: "home"
  },
  steps: [{
    label: "1 bedroom",
    dur: 40,
    price: 40
  }, {
    label: "2 bedroom",
    dur: 55,
    price: 55
  }, {
    label: "3 bedroom",
    dur: 70,
    price: 70
  }]
}, {
  id: "dusting",
  name: "Surface Dusting",
  price: 30,
  dur: 30,
  icon: "countertop.webp",
  desc: "Shelves, sills, tables and electronics gently dusted and wiped down throughout your space."
}, {
  id: "trash",
  name: "Trash & Recycling Run",
  price: 1,
  dur: 10,
  icon: "trash.webp",
  desc: "We gather, sort and take out the trash and recycling, and reline every bin."
}, {
  id: "balcony",
  name: "Balcony Refresh",
  price: 32,
  dur: 35,
  icon: "balcony.webp",
  desc: "Sweep, wipe and tidy your balcony — railings, floor and furniture left guest-ready."
}, {
  id: "windows",
  name: "Complete Window Cleaning",
  price: 12,
  dur: 30,
  icon: "window.webp",
  desc: "Interior glass and sills cleaned to a clear, streak-free shine.",
  opt: {
    label: "How many windows?",
    noun: "windows"
  },
  steps: [{
    label: "Up to 3 windows",
    dur: 30,
    price: 12
  }, {
    label: "4\u20136 windows",
    dur: 45,
    price: 20
  }, {
    label: "7\u201310 windows",
    dur: 60,
    price: 30
  }]
}, {
  id: "plants",
  name: "Watering Plants",
  price: 3,
  dur: 10,
  icon: "plants.webp",
  desc: "We water and check on your plants so everything stays lush while life is busy."
}, {
  id: "couch",
  name: "Couch & Throw Pillow Refresh",
  price: 3,
  dur: 15,
  icon: "couch.webp",
  desc: "Cushions fluffed, throws folded and the sofa reset to a calm, hotel-lobby tidy."
}, {
  id: "bed",
  name: "Bed Linen Refresh",
  price: 8,
  dur: 20,
  icon: "bed.webp",
  desc: "Fresh, crisp linens and a tightly-made bed — turned down like a suite."
}, {
  id: "dishes",
  name: "Dish Washing",
  price: 13,
  dur: 25,
  icon: "dishes.webp",
  desc: "Dishes washed, dried and put away, sink wiped down and left gleaming."
}, {
  id: "fridge",
  name: "Fridge Cleanout",
  price: 35,
  dur: 40,
  icon: "fridge.webp",
  desc: "Interior wiped, shelves cleaned and expired items cleared — fresh and organised."
}, {
  id: "oven",
  name: "Zing Oven Clean",
  price: 35,
  dur: 45,
  icon: "oven.webp",
  desc: "A deep degrease of the oven interior, racks and glass door, back to like-new."
}, {
  id: "spill",
  name: "Wine & Coffee Spill Treatment",
  price: 9,
  dur: 20,
  icon: "spill.webp",
  desc: "Fast, gentle treatment of fresh wine, coffee and food stains on fabric and floors."
}, {
  id: "laundry",
  name: "Zing Laundry Service",
  price: 15,
  dur: 50,
  icon: "laundry.webp",
  desc: "Wash and dry a load of laundry with premium detergent and fabric care.",
  opt: {
    label: "How many loads?",
    noun: "loads"
  },
  steps: [{
    label: "1 load",
    dur: 50,
    price: 15
  }, {
    label: "2 loads",
    dur: 85,
    price: 28
  }, {
    label: "3 loads",
    dur: 120,
    price: 40
  }]
}, {
  id: "folding",
  name: "Clothes Folding",
  price: 16,
  dur: 25,
  icon: "folding.webp",
  desc: "Clean laundry neatly folded and stacked, hotel-housekeeping style."
}, {
  id: "groceries",
  name: "Put Away Groceries",
  price: 3,
  dur: 15,
  icon: "groceries.webp",
  desc: "We unpack and organise your delivery into pantry and fridge so it's ready to use."
}, {
  id: "deodorize",
  name: "Deodorizing",
  price: 5,
  dur: 10,
  icon: "deodorize.webp",
  desc: "A light, natural deodorizing pass leaves your space smelling clean and calm."
}];
const TASK_BY_ID = Object.fromEntries(TASKS.map(t => [t.id, t]));

/* ---- Packages ---- */
const PACKAGES = [{
  id: "full",
  name: "Full Apartment Clean",
  price: 116,
  off: true,
  tasks: ["bathroom", "floor", "dusting", "trash", "bed"],
  icon: "couch.webp",
  desc: "Our signature top-to-bottom reset. We clean the bathroom, vacuum and mop every floor, dust all surfaces, take out the trash and refresh the bed linens — your whole apartment handled in one visit."
}, {
  id: "kitchen",
  name: "Kitchen Commander",
  price: 89,
  off: true,
  tasks: ["dishes", "oven", "fridge", "dusting"],
  icon: "oven.webp",
  desc: "A complete kitchen reset in one visit. We wash, dry and put away the dishes, deep-degrease the oven inside and out, wipe down and declutter the fridge, and dust and sanitize every counter and surface — the whole kitchen left spotless."
}, {
  id: "weekly",
  name: "Smart Weekly Care",
  price: 67,
  off: false,
  tasks: ["dusting", "floor", "trash"],
  icon: "bathroom.webp",
  desc: "A light, regular upkeep visit to keep things effortlessly tidy — surfaces dusted, floors vacuumed and mopped, and trash taken out. Best on a weekly rhythm."
}, {
  id: "biweekly",
  name: "Smart Bi-Weekly Care",
  price: 69,
  off: false,
  tasks: ["bathroom", "floor", "dusting"],
  icon: "window.webp",
  desc: "A slightly deeper every-other-week refresh — a full bathroom clean plus floors vacuumed and mopped and all surfaces dusted. The easy middle-ground routine."
}];

/* ---- Operating hours ---- */
const DAY_START = 8 * 60; // 8:00 AM
const DAY_END = 18 * 60; // 6:00 PM
const HOUR_PX = 64; // vertical px per hour
const SNAP = 15; // minute snap
const px = min => (min - DAY_START) / 60 * HOUR_PX;
const totalHeight = (DAY_END - DAY_START) / 60 * HOUR_PX;

/* ---- Date helpers (Mon–Fri only) ---- */
const DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function startToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}
function addBusinessDays(date, n) {
  const d = new Date(date);
  let step = n >= 0 ? 1 : -1;
  let left = Math.abs(n);
  while (left > 0) {
    d.setDate(d.getDate() + step);
    if (d.getDay() !== 0 && d.getDay() !== 6) left--;
  }
  return d;
}
const dateKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const fmtDayLabel = d => `${DAYNAMES[d.getDay()]}`;
const fmtDateLabel = d => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

/* ---- Time formatting ---- */
function fmtTime(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "PM" : "AM";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}:00 ${ap}` : `${hh}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtTimeShort(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "p" : "a";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}${ap}` : `${hh}:${String(m).padStart(2, "0")}${ap}`;
}
function fmtDur(min) {
  const h = Math.floor(min / 60),
    m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/* ---- Deterministic "already booked" blocks per day ----
   Booking load rotates so the 5-day strip always shows variety:
   ~1 in 5 days is FULL (red the moment you add anything),
   ~1 in 5 is HEAVY (only short tasks fit), the rest are OPEN. */
function seeded(n) {
  let x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}
const BUSY_LABELS = ["Full apartment clean", "Bathroom deep clean", "Kitchen reset", "Vacuum & floors", "Window cleaning", "Laundry service", "Fridge cleanout", "Dusting & tidy"];
const FLOOR_ORD = ["3rd", "5th", "7th", "9th", "11th", "12th", "14th", "17th", "19th", "21st", "24th", "28th"];
function dayLoad(d) {
  const ord = Math.floor(d.getTime() / 86400000);
  const m = (ord % 5 + 5) % 5;
  if (m === 0) return "full";
  if (m === 2) return "heavy";
  return "open";
}
function busyFor(d) {
  const seed = d.getFullYear() * 1000 + d.getMonth() * 40 + d.getDate();
  const load = dayLoad(d);
  const blocks = [];
  const lbl = i => BUSY_LABELS[Math.floor(seeded(seed * 13 + i) * BUSY_LABELS.length)];
  const unit = i => FLOOR_ORD[Math.floor(seeded(seed * 17 + i) * FLOOR_ORD.length)] + " floor";
  if (load === "full") {
    // fully booked — packed wall-to-wall, no usable gap (red for anything)
    let cursor = DAY_START;
    let i = 0;
    while (cursor < DAY_END) {
      const len = (3 + Math.floor(seeded(seed * 7 + i * 5) * 4)) * SNAP; // 45–90 min
      let end = cursor + len;
      if (end > DAY_END - 30) end = DAY_END; // clamp: no leftover window
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      if (end >= DAY_END) break;
      cursor = end + (seeded(seed * 3 + i) < .5 ? 0 : SNAP); // 0–15 min seam
      i++;
    }
  } else if (load === "heavy") {
    // packed, leaving only 30–45 min windows — short tasks fit, bundles don't
    let cursor = DAY_START + (seeded(seed * 2) < .5 ? 0 : SNAP);
    let i = 0;
    while (cursor < DAY_END - 30) {
      const len = (4 + Math.floor(seeded(seed * 7 + i * 5) * 3)) * SNAP; // 60–90 min
      const end = Math.min(cursor + len, DAY_END);
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      const gap = (2 + Math.floor(seeded(seed * 11 + i * 3) * 2)) * SNAP; // 30–45 min
      cursor = end + gap;
      i++;
    }
  } else {
    // open day — a handful of scattered bookings, lots of room
    const count = 2 + Math.floor(seeded(seed) * 3); // 2–4 blocks
    let cursor = DAY_START + Math.floor(seeded(seed * 2) * 6) * SNAP;
    for (let i = 0; i < count; i++) {
      const gap = (1 + Math.floor(seeded(seed * 7 + i * 3) * 5)) * SNAP; // 15–75 min gap
      const len = (2 + Math.floor(seeded(seed * 11 + i * 5) * 5)) * SNAP; // 30–90 min
      const start = cursor + gap;
      const end = start + len;
      if (end > DAY_END - 15) break;
      blocks.push({
        start,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      cursor = end;
    }
  }
  return blocks;
}

/* ---- Open windows = gaps between busy blocks within hours ---- */
function openWindows(busy) {
  const sorted = [...busy].sort((a, b) => a.start - b.start);
  const wins = [];
  let cursor = DAY_START;
  for (const b of sorted) {
    if (b.start - cursor >= SNAP) wins.push({
      start: cursor,
      end: b.start
    });
    cursor = Math.max(cursor, b.end);
  }
  if (DAY_END - cursor >= SNAP) wins.push({
    start: cursor,
    end: DAY_END
  });
  return wins;
}

/* ---- Find first valid start for a duration on a day ---- */
function firstFit(busy, dur) {
  for (const w of openWindows(busy)) {
    if (w.end - w.start >= dur) return w.start;
  }
  return null;
}
/* ---- Is a [start, start+dur) block valid (in hours, no overlap)? ---- */
function fits(busy, start, dur) {
  if (start < DAY_START || start + dur > DAY_END) return false;
  return !busy.some(b => start < b.end && start + dur > b.start);
}
/* ---- Snap an arbitrary minute to a valid start near it ---- */
function snapValid(busy, raw, dur) {
  let start = Math.round((raw - dur / 2) / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  // search outward for nearest fitting start
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}
/* ---- Snap a START minute (anchored at top, for tap + drag) to nearest valid ---- */
function snapStart(busy, rawStart, dur) {
  let start = Math.round(rawStart / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}

/* ---------------- Line icons (UI chrome) ---------------- */
const P = {
  home: "M3 11l9-8 9 8M5 9.5V20h14V9.5",
  cal: "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 9.5h16M8 3.5v3M16 3.5v3",
  user: "M4.5 20a7.5 7.5 0 0 1 15 0M12 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5",
  cart: "M3 4h2.2l1.9 11.2a1.5 1.5 0 0 0 1.48 1.25h8.32a1.5 1.5 0 0 0 1.47-1.2L20.5 7H6.2M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
  left: "M15 5l-7 7 7 7",
  right: "M9 5l7 7-7 7",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 12.5l4.5 4.5L19 7",
  clock: "M12 7.5v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  plus: "M12 5v14M5 12h14",
  phone: "M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 4.9 4.9l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5",
  trash: "M5 7h14M9 7V5h6v2M7 7l.8 12.2A1 1 0 0 0 8.8 20h6.4a1 1 0 0 0 1-0.8L17 7M10 11v5M14 11v5",
  refresh: "M4 11a8 8 0 0 1 13.5-4.5L20 9M20 4v5h-5M20 13a8 8 0 0 1-13.5 4.5L4 15M4 20v-5h5",
  spark: "M12 3l1.6 5L19 9.6 13.6 11 12 16l-1.6-5L5 9.6 10.4 8z",
  edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
  bag: "M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2",
  info: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M12 11v5M12 7.5h.01"
};
function LineIcon({
  d,
  w = 22,
  sw = 1.6,
  style
}) {
  return React.createElement("svg", {
    width: w,
    height: w,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  }, React.createElement("path", {
    d
  }));
}
Object.assign(window, {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  SNAP,
  px,
  totalHeight,
  startToday,
  addBusinessDays,
  dateKey,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  busyFor,
  openWindows,
  firstFit,
  fits,
  snapValid,
  snapStart,
  P,
  LineIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "export/zing-resident-app/data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-app/app.jsx
try { (() => {
/* Zing Resident App — interactive mobile prototype.
   Built on the Zing design system: tokens + .zg-* component classes.
   Screens: Home menu → Service detail → Schedule → Confirmation, + Orders. */

const {
  useState
} = React;

/* ----------------------------- Icons ----------------------------- */
const I = {
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  sink: "M3 11h18M5 11v5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-5M12 11V6a2 2 0 0 1 2-2",
  towel: "M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6zM6 3a2 2 0 0 0-2 2v3h4",
  bed: "M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18h18M3 14h18M7 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
  window: "M4 4h16v16H4zM12 4v16M4 12h16",
  fridge: "M6 3h12v18H6zM6 10h12M9 6v2M9 13v3",
  home: "M3 11l9-8 9 8M5 9v11h14V9",
  bag: "M6 8h12l-1 13H7zM9 8V6a3 3 0 0 1 6 0v2",
  user: "M4 20a8 8 0 0 1 16 0M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
  arrow: "M5 12h14M13 6l6 6-6 6",
  back: "M19 12H5M11 18l-6-6 6-6",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  check: "M5 12l5 5L20 7"
};
const Icon = ({
  d,
  w = 22
}) => /*#__PURE__*/React.createElement("svg", {
  width: w,
  height: w,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: d
}));

/* --------------------------- Service data ------------------------- */
const SERVICES = [{
  id: "bath",
  icon: I.spark,
  title: "Bathroom refresh",
  time: 25,
  price: 28,
  blurb: "Mirror, sink, counters and a fresh set of folded towels.",
  img: "../../assets/imagery/bathroom-mirror.png",
  loved: true
}, {
  id: "kitchen",
  icon: I.sink,
  title: "Kitchen touch-up",
  time: 20,
  price: 24,
  blurb: "Counters, sink and stovetop wiped to a quiet shine.",
  img: "../../assets/imagery/wiping-counter.png"
}, {
  id: "towels",
  icon: I.towel,
  title: "Fresh towel service",
  time: 15,
  price: 18,
  blurb: "Plush, hotel-style towels — swapped and restocked.",
  img: "../../assets/imagery/fresh-towels.png"
}, {
  id: "floors",
  icon: I.home,
  title: "Floors & living room",
  time: 30,
  price: 32,
  blurb: "Vacuum, mop and a gentle tidy of the main space.",
  img: "../../assets/imagery/vacuum-living.png"
}, {
  id: "dining",
  icon: I.window,
  title: "Dining reset",
  time: 20,
  price: 22,
  blurb: "Table cleared, wiped and set calm for the evening.",
  img: "../../assets/imagery/dining-table.png"
}];

/* ----------------------------- Chrome ----------------------------- */
function StatusBar({
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "statusbar",
    style: {
      color: dark ? "var(--paper-50)" : "var(--forest-800)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    className: "dots"
  }, /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null), /*#__PURE__*/React.createElement("i", null)));
}
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Services",
    d: I.spark
  }, {
    id: "orders",
    label: "Orders",
    d: I.bag
  }, {
    id: "account",
    label: "Account",
    d: I.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bottomnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: "navbtn" + (tab === it.id ? " navbtn--active" : ""),
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(Icon, {
    d: it.d,
    w: 22
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ----------------------------- Screens ---------------------------- */
function Home({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("header", {
    className: "home-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zing-eyebrow"
  }, "The Hamilton \xB7 Apt 1408"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, "Good morning, Ana.")), /*#__PURE__*/React.createElement("span", {
    className: "zg-avatar zg-avatar--lg"
  }, "AM")), /*#__PURE__*/React.createElement("div", {
    className: "hero-card",
    style: {
      backgroundImage: "url('../../assets/imagery/breakfast-cart-lobby.jpg')"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-veil"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--accent"
  }, "This week"), /*#__PURE__*/React.createElement("div", {
    className: "hero-title"
  }, "Resident breakfast,", /*#__PURE__*/React.createElement("br", null), "Friday at 8."), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--secondary zg-btn--sm"
  }, "Reserve a morning"))), /*#__PURE__*/React.createElement("div", {
    className: "section-row"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "section-title"
  }, "Order a service"), /*#__PURE__*/React.createElement("span", {
    className: "section-link"
  }, "Down the hall \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    className: "zg-row zg-row--interactive",
    onClick: () => onOpen(s)
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: s.icon
  })), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, s.title, s.loved && /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--accent",
    style: {
      marginLeft: 8,
      verticalAlign: "middle"
    }
  }, "Loved")), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, "~", s.time, " min")), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__meta"
  }, "$", s.price)))));
}
function Detail({
  service,
  onBack,
  onReserve
}) {
  const [freq, setFreq] = useState("once");
  const [towels, setTowels] = useState(true);
  const [restock, setRestock] = useState(false);
  const addons = (towels ? 6 : 0) + (restock ? 8 : 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "screen screen--flush"
  }, /*#__PURE__*/React.createElement("div", {
    className: "detail-media",
    style: {
      backgroundImage: `url('${service.img}')`
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    dark: true
  }), /*#__PURE__*/React.createElement("button", {
    className: "round-back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.back,
    w: 20
  }))), /*#__PURE__*/React.createElement("div", {
    className: "detail-body"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, service.title), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, service.blurb), /*#__PURE__*/React.createElement("div", {
    className: "meta-line"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.clock,
    w: 16
  }), " About ", service.time, " minutes \xB7 handled by a vetted Zing host"), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-label"
  }, "How often?"), /*#__PURE__*/React.createElement("div", {
    className: "zg-segment",
    role: "tablist"
  }, [["once", "One-time"], ["weekly", "Weekly"], ["biweekly", "Bi-weekly"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    "aria-selected": freq === v,
    onClick: () => setFreq(v)
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-label"
  }, "Add a touch"), /*#__PURE__*/React.createElement("label", {
    className: "zg-check addon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: towels,
    onChange: e => setTowels(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check,
    w: 14
  })), /*#__PURE__*/React.createElement("span", null, "Fresh towels"), /*#__PURE__*/React.createElement("b", null, "+$6")), /*#__PURE__*/React.createElement("label", {
    className: "zg-check addon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: restock,
    onChange: e => setRestock(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "zg-check__box"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check,
    w: 14
  })), /*#__PURE__*/React.createElement("span", null, "Restock essentials"), /*#__PURE__*/React.createElement("b", null, "+$8")))), /*#__PURE__*/React.createElement("div", {
    className: "detail-foot"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "foot-label"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "foot-price"
  }, "$", service.price + addons)), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--primary zg-btn--lg",
    onClick: () => onReserve(service, service.price + addons)
  }, "Reserve ", /*#__PURE__*/React.createElement(Icon, {
    d: I.arrow,
    w: 18
  }))));
}
function Schedule({
  onConfirm,
  onBack
}) {
  const [slot, setSlot] = useState("morning");
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement("header", {
    className: "sub-head"
  }, /*#__PURE__*/React.createElement("button", {
    className: "round-back round-back--light",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.back,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", {
    className: "sub-title"
  }, "When works for you?")), /*#__PURE__*/React.createElement("div", {
    className: "day-row"
  }, ["Tue 10", "Wed 11", "Thu 12", "Fri 13"].map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: d,
    className: "daychip" + (i === 1 ? " daychip--on" : "")
  }, /*#__PURE__*/React.createElement("span", null, d.split(" ")[0]), /*#__PURE__*/React.createElement("b", null, d.split(" ")[1])))), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-label"
  }, "Arrival window"), /*#__PURE__*/React.createElement("div", {
    className: "slot-list"
  }, [["morning", "Morning", "8:00 – 11:00am"], ["midday", "Midday", "11:00 – 2:00pm"], ["afternoon", "Afternoon", "2:00 – 5:00pm"]].map(([v, l, t]) => /*#__PURE__*/React.createElement("label", {
    key: v,
    className: "slot" + (slot === v ? " slot--on" : ""),
    onClick: () => setSlot(v)
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "slot-l"
  }, l), /*#__PURE__*/React.createElement("div", {
    className: "slot-t"
  }, t)), /*#__PURE__*/React.createElement("span", {
    className: "slot-radio"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "field-block"
  }, /*#__PURE__*/React.createElement("label", {
    className: "zg-field"
  }, /*#__PURE__*/React.createElement("span", {
    className: "zg-label"
  }, "Access note"), /*#__PURE__*/React.createElement("input", {
    className: "zg-input",
    defaultValue: "Doorman has a key \u2014 please text on arrival."
  }))), /*#__PURE__*/React.createElement("div", {
    className: "screen-foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--primary zg-btn--block zg-btn--lg",
    onClick: onConfirm
  }, "Confirm reservation")));
}
function Confirm({
  summary,
  onDone
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen screen--center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check,
    w: 34
  })), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1",
    style: {
      textAlign: "center"
    }
  }, "You're all set."), /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      textAlign: "center",
      maxWidth: 280
    }
  }, summary.title, " is reserved for Wednesday, 8\u201311am. We'll take it from here."), /*#__PURE__*/React.createElement("div", {
    className: "confirm-card zg-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-card__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", null, "Service"), /*#__PURE__*/React.createElement("b", null, summary.title)), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, "Wed Mar 11 \xB7 Morning")), /*#__PURE__*/React.createElement("div", {
    className: "cc-row"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, "The Hamilton \xB7 1408")), /*#__PURE__*/React.createElement("div", {
    className: "cc-row cc-total"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("b", null, "$", summary.total)))), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--outline zg-btn--block",
    onClick: onDone
  }, "Back to services"));
}
function Orders({
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("header", {
    className: "home-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zing-eyebrow"
  }, "Your history"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, "My orders"))), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon",
    style: {
      background: "var(--success-100)",
      color: "var(--success-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.check
  })), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, "Bathroom refresh"), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, "Mar 4 \xB7 Completed")), /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--success"
  }, "Done")), /*#__PURE__*/React.createElement("div", {
    className: "zg-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__icon",
    style: {
      background: "var(--warning-100)",
      color: "var(--warning-600)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: I.clock
  })), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, "Fresh towel service"), /*#__PURE__*/React.createElement("div", {
    className: "zg-row__sub"
  }, "Tomorrow \xB7 Morning")), /*#__PURE__*/React.createElement("span", {
    className: "zg-badge zg-badge--warning"
  }, "Scheduled"))), /*#__PURE__*/React.createElement("div", {
    className: "empty-cta"
  }, /*#__PURE__*/React.createElement("p", {
    className: "lead",
    style: {
      textAlign: "center"
    }
  }, "Need something else handled?"), /*#__PURE__*/React.createElement("button", {
    className: "zg-btn zg-btn--primary",
    onClick: onBrowse
  }, "Browse services")));
}
function Account() {
  return /*#__PURE__*/React.createElement("div", {
    className: "screen"
  }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement("header", {
    className: "home-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "zing-eyebrow"
  }, "The Hamilton \xB7 1408"), /*#__PURE__*/React.createElement("h1", {
    className: "serif-h1"
  }, "Ana Marlowe")), /*#__PURE__*/React.createElement("span", {
    className: "zg-avatar zg-avatar--lg"
  }, "AM")), /*#__PURE__*/React.createElement("div", {
    className: "menu"
  }, ["Payment methods", "Saved preferences", "Building & access", "Notifications", "Help & concierge"].map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    className: "zg-row zg-row--interactive"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "zg-row__title"
  }, l)), /*#__PURE__*/React.createElement(Icon, {
    d: I.arrow,
    w: 18
  })))));
}

/* ------------------------------ App ------------------------------- */
function App() {
  const [tab, setTab] = useState("home");
  const [flow, setFlow] = useState(null); // null | {step, service, total}

  const open = service => setFlow({
    step: "detail",
    service,
    total: service.price
  });
  const reserve = (service, total) => setFlow({
    step: "schedule",
    service,
    total
  });
  const confirm = () => setFlow(f => ({
    ...f,
    step: "confirm"
  }));
  const done = () => {
    setFlow(null);
    setTab("orders");
  };
  let body;
  if (flow?.step === "detail") body = /*#__PURE__*/React.createElement(Detail, {
    service: flow.service,
    onBack: () => setFlow(null),
    onReserve: reserve
  });else if (flow?.step === "schedule") body = /*#__PURE__*/React.createElement(Schedule, {
    onConfirm: confirm,
    onBack: () => setFlow({
      ...flow,
      step: "detail"
    })
  });else if (flow?.step === "confirm") body = /*#__PURE__*/React.createElement(Confirm, {
    summary: {
      title: flow.service.title,
      total: flow.total
    },
    onDone: done
  });else if (tab === "home") body = /*#__PURE__*/React.createElement(Home, {
    onOpen: open
  });else if (tab === "orders") body = /*#__PURE__*/React.createElement(Orders, {
    onBrowse: () => setTab("home")
  });else body = /*#__PURE__*/React.createElement(Account, null);
  const hideNav = flow?.step === "detail" || flow?.step === "schedule";
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, body, !hideNav && /*#__PURE__*/React.createElement(BottomNav, {
    tab: tab,
    setTab: t => {
      setFlow(null);
      setTab(t);
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/app.jsx
try { (() => {
/* Zing Resident App · hero task grid + floating availability bar that opens a
   dedicated full-page time picker.
   Tabs: Home · Your bookings · Profile.
   Home = browse tasks/packages (2-col grid, toggle) and add to cart; a compact
   bar hovers above the nav showing the running total + 5-day availability
   (green/red dot + tint). Tapping it opens a chrome-less booking page (back
   button only) to place the visit on the calendar and reserve. */
const {
  useState,
  useMemo,
  useEffect
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  startToday,
  addBusinessDays,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtDur,
  busyFor,
  snapValid,
  firstFit,
  fits,
  P,
  LineIcon,
  AppBar,
  BottomNav,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DayChips,
  TimelineLegend,
  Timeline
} = window;
const FREQS = ["One-time", "Weekly", "Bi-weekly", "Monthly"];
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const WEEK = 5;
const BUSINESS_DAYS = Array.from({
  length: 45
}, (_, i) => addBusinessDays(startToday(), i));
const FIVE = BUSINESS_DAYS.slice(0, 5);
const monthLabel = (a, b) => a.getMonth() === b.getMonth() ? `${MONTHS_FULL[a.getMonth()]} ${a.getFullYear()}` : `${MONTHS[a.getMonth()]} – ${MONTHS[b.getMonth()]} ${b.getFullYear()}`;
const titleOf = items => items.length === 1 ? items[0].name : `${items[0].name} + ${items.length - 1} more`;

/* ============================ Package detail sheet ============================ */
function PackageModal({
  pkg,
  added,
  onClose,
  onAdd
}) {
  const tasks = pkg.tasks.map(id => TASK_BY_ID[id]);
  const dur = tasks.reduce((s, t) => s + t.dur, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      color: "var(--ink-500)"
    }
  }, "/ visit")), /*#__PURE__*/React.createElement("div", {
    className: "sheet__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), " per visit"), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, "A curated bundle handled in one visit.", pkg.off ? " Save up to 15% on recurring orders." : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "2px 2px 18px"
    }
  }, tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + t.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, "~", fmtDur(t.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", t.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: () => onAdd(pkg)
  }, added ? "Remove from cart" : "Add package to cart")));
}

/* ============================ Floating availability bar ============================ */
function FloatingBar({
  cart,
  dayIdx,
  setDayIdx,
  onOpen
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);

  // Auto-track availability: always land on the earliest day that fits the current
  // visit. Adding tasks pushes forward past full days; removing tasks pulls back to
  // a sooner opening.
  useEffect(() => {
    if (dur === 0) return;
    const firstAvail = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    if (firstAvail >= 0 && firstAvail !== dayIdx) setDayIdx(firstAvail);
  }, [dur]);

  // 5-day preview window that always keeps the selected day in view.
  const winStart = dayIdx < WEEK ? 0 : Math.min(dayIdx, BUSINESS_DAYS.length - WEEK);
  const days = BUSINESS_DAYS.slice(winStart, winStart + WEEK);
  const date = BUSINESS_DAYS[dayIdx];
  const active = dur > 0;
  return /*#__PURE__*/React.createElement("div", {
    className: "fbar",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 17
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "fbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · Tap to pick a time` : "Add tasks to build a visit"))), /*#__PURE__*/React.createElement("div", {
    className: "fbar__day"
  }, /*#__PURE__*/React.createElement("b", null, fmtDayLabel(date)), /*#__PURE__*/React.createElement("span", null, fmtDateLabel(date)))), /*#__PURE__*/React.createElement(DayChips, {
    days: days,
    idx: dayIdx - winStart,
    onPick: i => {
      setDayIdx(winStart + i);
      onOpen();
    },
    dur: dur
  }));
}

/* ============================ Dedicated booking page ============================ */
function BookingPage({
  cart,
  dayIdx,
  setDayIdx,
  onBack,
  onReserve
}) {
  const dur = cart.reduce((s, c) => s + c.dur, 0);
  const date = BUSINESS_DAYS[dayIdx];
  const busy = useMemo(() => busyFor(date), [dayIdx]);
  const [selStart, setSelStart] = useState(null);
  const [weekStart, setWeekStart] = useState(Math.floor(dayIdx / WEEK) * WEEK);
  const active = dur > 0;
  useEffect(() => {
    if (dur === 0) {
      setSelStart(null);
      return;
    }
    setSelStart(prev => prev != null && fits(busy, prev, dur) ? prev : firstFit(busy, dur));
  }, [dur, dayIdx]);
  const weekDays = BUSINESS_DAYS.slice(weekStart, weekStart + WEEK);
  const localSel = dayIdx - weekStart;
  const goWeek = delta => {
    const ns = weekStart + delta * WEEK;
    if (ns < 0 || ns >= BUSINESS_DAYS.length) return;
    setWeekStart(ns);
    setDayIdx(Math.min(BUSINESS_DAYS.length - 1, ns + dayIdx % WEEK));
  };
  const pick = raw => {
    const s = snapStart(busy, raw, dur);
    if (s != null) setSelStart(s);
  };
  const nudge = d => {
    if (selStart == null) return;
    const n = selStart + d;
    if (fits(busy, n, dur)) setSelStart(n);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bookhead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Pick your time")), /*#__PURE__*/React.createElement("div", {
    className: "visitbar",
    style: {
      marginTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__ring"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 30,
    sw: 1.4
  })), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__t"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitbar__big"
  }, active ? `~${fmtDur(dur)}` : "No tasks yet"), /*#__PURE__*/React.createElement("div", {
    className: "visitbar__sub"
  }, active ? `${cart.length} ${cart.length === 1 ? "task" : "tasks"} · one visit` : "Add tasks on the home screen"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "weeknav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(-1),
    disabled: weekStart === 0,
    "aria-label": "Previous week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "weeknav__label"
  }, /*#__PURE__*/React.createElement("b", null, monthLabel(weekDays[0], weekDays[weekDays.length - 1])), /*#__PURE__*/React.createElement("span", null, weekStart === 0 ? "This week" : `${MONTHS[weekDays[0].getMonth()]} ${weekDays[0].getDate()} – ${MONTHS[weekDays[weekDays.length - 1].getMonth()]} ${weekDays[weekDays.length - 1].getDate()}`)), /*#__PURE__*/React.createElement("button", {
    className: "weeknav__arrow",
    onClick: () => goWeek(1),
    disabled: weekStart + WEEK >= BUSINESS_DAYS.length,
    "aria-label": "Next week"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  }))), /*#__PURE__*/React.createElement(DayChips, {
    days: weekDays,
    idx: localSel,
    onPick: i => setDayIdx(weekStart + i),
    dur: dur,
    variant: "page"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(TimelineLegend, {
    booking: active
  }), active && /*#__PURE__*/React.createElement("div", {
    className: "pickcue"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 15
  }), " Tap an open slot or drag your visit to set a time"), !active && /*#__PURE__*/React.createElement("div", {
    className: "bookhint"
  }, "Add a task on the home screen to reserve \u2014 you can still preview open slots below."))), /*#__PURE__*/React.createElement("div", {
    className: "bookcal"
  }, /*#__PURE__*/React.createElement("div", {
    key: dayIdx,
    className: "slide-anim"
  }, /*#__PURE__*/React.createElement(Timeline, {
    busy: busy,
    dur: active ? dur : null,
    selStart: active ? selStart : null,
    onPick: active ? pick : null,
    onDragStart: active ? pick : null,
    showOpen: true
  })), active && selStart == null && /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stepper__lbl"
  }, "No open block fits this visit \u2014 try another day (red = full)."))), /*#__PURE__*/React.createElement("div", {
    className: "stickyfoot stickyfoot--page"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: active && selStart == null,
    onClick: () => active ? onReserve({
      date,
      start: selStart,
      dur
    }) : onBack()
  }, active ? selStart != null ? `Continue – ${fmtTime(selStart)} to ${fmtTime(selStart + dur)}` : "Pick a time on the calendar" : "Add a task to reserve")));
}

/* ============================ Faux Apple Pay sheet ============================ */
const FACE_ID = "M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2";
function ApplePaySheet({
  amount,
  onCancel,
  onDone
}) {
  const [stage, setStage] = useState("auth");
  useEffect(() => {
    const t = setTimeout(() => setStage("ok"), 1700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (stage === "ok") {
      const t = setTimeout(onDone, 950);
      return () => clearTimeout(t);
    }
  }, [stage]);
  return /*#__PURE__*/React.createElement("div", {
    className: "ap-scrim",
    onClick: onCancel
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("span", {
    className: "ap-side"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-grab"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ap-head"
  }, /*#__PURE__*/React.createElement("b", null, "Apple Pay"), /*#__PURE__*/React.createElement("button", {
    className: "ap-x",
    onClick: onCancel
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic"
  }, "ZING"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Zing \xB7 Bezel Miami"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Apartment 1925"))), /*#__PURE__*/React.createElement("div", {
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__ic",
    style: {
      background: "linear-gradient(135deg,#1a1a2e,#39507a)"
    }
  }, "VISA"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Visa  \xB7\xB7\xB7\xB7  4242"), /*#__PURE__*/React.createElement("div", {
    className: "ap-row__s"
  }, "Default Card")), /*#__PURE__*/React.createElement("span", {
    className: "ap-row__chev"
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "ap-row ap-row--total"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-row__t"
  }, "Pay Zing")), /*#__PURE__*/React.createElement("div", {
    className: "ap-amt"
  }, "$", amount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "ap-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ap-face" + (stage === "ok" ? " ap-face--ok" : "")
  }, stage === "ok" ? /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 26,
    sw: 2.4
  }) : /*#__PURE__*/React.createElement("svg", {
    width: "28",
    height: "28",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: FACE_ID
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 10v1.2M15 10v1.2M12 10v2.6l-1 .8M9.6 15.2c.7.6 1.5.9 2.4.9s1.7-.3 2.4-.9"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "ap-cta"
  }, stage === "ok" ? "Done" : "Double-Click to Pay"))));
}

/* ============================ Checkout ============================ */
const ENTRY_OPTS = ["I'll be home", "The door's unlocked — come on in", "Use the Zing Access Station"];
const FREQ_SUB = {
  "One-time": "",
  "Weekly": "Save 15%",
  "Bi-weekly": "Save 10%",
  "Monthly": "Save 5%"
};
const FREQ_OFF = {
  "One-time": 0,
  "Weekly": 0.15,
  "Bi-weekly": 0.10,
  "Monthly": 0.05
};
function Checkout({
  cart,
  booking,
  freq,
  setFreq,
  onBack,
  onPlaceOrder
}) {
  const subtotal = cart.reduce((s, c) => s + c.price, 0);
  const [tip, setTip] = useState({
    mode: "pct",
    pct: 18
  });
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(null);
  const [entry, setEntry] = useState("");
  const [notes, setNotes] = useState("");
  const [pay, setPay] = useState("apple");
  const [card, setCard] = useState({
    num: "",
    exp: "",
    cvc: "",
    zip: ""
  });
  const [apOpen, setApOpen] = useState(false);
  const tipAmt = tip.mode === "pct" ? Math.round(subtotal * tip.pct) / 100 : tip.mode === "custom" ? parseFloat(tip.custom) || 0 : 0;
  const planOff = Math.round(subtotal * FREQ_OFF[freq] * 100) / 100;
  const discount = applied ? Math.round(subtotal * 0.1 * 100) / 100 : 0;
  const total = Math.max(0, subtotal - planOff - discount + tipAmt);
  const cardOk = card.num.replace(/\s/g, "").length >= 12 && card.exp.length >= 4 && card.cvc.length >= 3;
  const ready = entry !== "" && (pay === "apple" || cardOk);
  const place = () => onPlaceOrder({
    tip: tipAmt,
    discount,
    total,
    freq,
    entry,
    notes,
    pay: pay === "apple" ? "Apple Pay" : "Visa ····4242"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "bookpage page-anim"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cohead"
  }, /*#__PURE__*/React.createElement("div", {
    className: "subhead"
  }, /*#__PURE__*/React.createElement("button", {
    className: "back",
    onClick: onBack
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("h2", null, "Last step")), /*#__PURE__*/React.createElement("div", {
    className: "recap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__ic"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "recap__t"
  }, fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " \xB7 ", fmtTime(booking.start), "\u2013", fmtTime(booking.start + booking.dur)), /*#__PURE__*/React.createElement("div", {
    className: "recap__s"
  }, cart.length, " ", cart.length === 1 ? "task" : "tasks", " \xB7 ~", fmtDur(booking.dur), " \xB7 Bezel Miami 1925")))), /*#__PURE__*/React.createElement("div", {
    className: "cobody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 17
  }), " How often?"), /*#__PURE__*/React.createElement("div", {
    className: "freqgrid"
  }, FREQS.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: freq === f ? "freqgrid__on" : "",
    onClick: () => setFreq(f)
  }, f, FREQ_SUB[f] ? /*#__PURE__*/React.createElement("span", {
    className: "freqgrid__sub"
  }, FREQ_SUB[f]) : null)))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (entry ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.home,
    w: 17
  }), " How will we get in?"), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "selectwrap"
  }, /*#__PURE__*/React.createElement("select", {
    value: entry,
    onChange: e => setEntry(e.target.value)
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select an option\u2026"), ENTRY_OPTS.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))))), /*#__PURE__*/React.createElement("div", {
    className: "field",
    style: {
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("label", null, "Any entry or special instructions?"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Knock before entering, friendly dog inside\u2026",
    value: notes,
    onChange: e => setNotes(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (tip.mode !== "none" && (tip.mode === "pct" || tipAmt > 0) ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 17
  }), " Add a tip for your Zing cleaner"), /*#__PURE__*/React.createElement("div", {
    className: "tiprow"
  }, [15, 18, 20].map(p => /*#__PURE__*/React.createElement("button", {
    key: p,
    className: "tipbtn" + (tip.mode === "pct" && tip.pct === p ? " tipbtn--on" : ""),
    onClick: () => setTip({
      mode: "pct",
      pct: p
    })
  }, p, "%", /*#__PURE__*/React.createElement("small", null, "$", (Math.round(subtotal * p) / 100).toFixed(2))))), /*#__PURE__*/React.createElement("div", {
    className: "tipcustom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tipcustom__wrap"
  }, /*#__PURE__*/React.createElement("span", null, "$"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    inputMode: "decimal",
    placeholder: "Add a custom amount",
    value: tip.mode === "custom" ? tip.custom || "" : "",
    onChange: e => setTip({
      mode: "custom",
      custom: e.target.value.replace(/[^0-9.]/g, "")
    })
  }))), /*#__PURE__*/React.createElement("button", {
    className: "notip" + (tip.mode === "none" ? " notip--on" : ""),
    onClick: () => setTip({
      mode: "none"
    })
  }, "No tip")), /*#__PURE__*/React.createElement("div", {
    className: "card card--active"
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 17
  }), " Payment"), /*#__PURE__*/React.createElement("div", {
    className: "paymethod"
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "apple" ? " payopt--on" : ""),
    onClick: () => setPay("apple")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Apple Pay"), /*#__PURE__*/React.createElement("span", {
    className: "payopt__hint"
  }, "Fastest")), /*#__PURE__*/React.createElement("div", {
    className: "payopt" + (pay === "card" ? " payopt--on" : ""),
    onClick: () => setPay("card")
  }, /*#__PURE__*/React.createElement("div", {
    className: "payopt__radio"
  }), /*#__PURE__*/React.createElement("div", {
    className: "payopt__label"
  }, "Credit or debit card"))), pay === "card" && /*#__PURE__*/React.createElement("div", {
    className: "cardform"
  }, /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Card number",
    inputMode: "numeric",
    value: card.num,
    onChange: e => setCard({
      ...card,
      num: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "MM / YY",
    inputMode: "numeric",
    value: card.exp,
    onChange: e => setCard({
      ...card,
      exp: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "CVC",
    inputMode: "numeric",
    value: card.cvc,
    onChange: e => setCard({
      ...card,
      cvc: e.target.value
    })
  }), /*#__PURE__*/React.createElement("input", {
    className: "full",
    placeholder: "Billing ZIP",
    inputMode: "numeric",
    value: card.zip,
    onChange: e => setCard({
      ...card,
      zip: e.target.value
    })
  }))), /*#__PURE__*/React.createElement("div", {
    className: "card" + (applied ? " card--active" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "secttl"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 17
  }), " Have a coupon code?"), /*#__PURE__*/React.createElement("div", {
    className: "coupon"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "Enter coupon code",
    value: coupon,
    onChange: e => setCoupon(e.target.value.toUpperCase())
  }), /*#__PURE__*/React.createElement("button", {
    disabled: !coupon.trim(),
    onClick: () => setApplied(coupon.trim())
  }, "Apply")), applied && /*#__PURE__*/React.createElement("div", {
    className: "coupon__ok"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 15,
    sw: 2
  }), " \u201C", applied, "\u201D applied \xB7 10% off")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("b", null, "$", subtotal.toFixed(2))), planOff > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, freq, " plan (", Math.round(FREQ_OFF[freq] * 100), "% off)"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", planOff.toFixed(2))), discount > 0 && /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Coupon"), /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--success-600)"
    }
  }, "\u2212$", discount.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Tip", tip.mode === "pct" ? ` (${tip.pct}%)` : ""), /*#__PURE__*/React.createElement("b", null, "$", tipAmt.toFixed(2))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", total.toFixed(2)))), pay === "apple" ? /*#__PURE__*/React.createElement("button", {
    className: "applebtn",
    disabled: !ready,
    style: !ready ? {
      opacity: .45
    } : null,
    onClick: () => ready && setApOpen(true)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.6 12.7c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.7-1.3-.13-2.5.77-3.1.77-.62 0-1.65-.75-2.7-.73-1.4.02-2.67.8-3.38 2.05-1.44 2.5-.37 6.2 1.04 8.23.69 1 1.5 2.1 2.57 2.06 1.03-.04 1.42-.66 2.67-.66 1.24 0 1.6.66 2.69.64 1.11-.02 1.81-1 2.49-2 .78-1.15 1.1-2.26 1.12-2.32-.02-.01-2.15-.83-2.17-3.25zM15.5 6.3c.56-.7.95-1.62.84-2.55-.81.03-1.8.54-2.39 1.23-.52.6-.98 1.58-.86 2.48.9.07 1.83-.46 2.41-1.16z"
  })), "Pay") : /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    disabled: !ready,
    onClick: place
  }, "Place order \xB7 $", total.toFixed(2)), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 11.5,
      color: "var(--ink-500)",
      marginTop: 12,
      lineHeight: 1.5
    }
  }, "You won't be charged until your visit is complete. We'll text you to confirm timing.")), apOpen && /*#__PURE__*/React.createElement(ApplePaySheet, {
    amount: total,
    onCancel: () => setApOpen(false),
    onDone: () => {
      setApOpen(false);
      place();
    }
  }));
}

/* ============================ Info sheet (task / package description) ============================ */
function InfoSheet({
  item,
  onClose
}) {
  const isPkg = !!item.tasks;
  const tasks = isPkg ? item.tasks.map(id => TASK_BY_ID[id]).filter(Boolean) : [];
  const dur = isPkg ? tasks.reduce((s, t) => s + t.dur, 0) : item.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "sheet",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sheet__close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.close,
    w: 16
  })), /*#__PURE__*/React.createElement("div", {
    className: "sheet__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + item.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("h3", {
    className: "sheet__title"
  }, item.name), /*#__PURE__*/React.createElement("div", {
    className: "sheet__meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 14
  }), " About ", fmtDur(dur), isPkg ? " / visit" : ""), /*#__PURE__*/React.createElement("span", {
    className: "sheet__dot"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, isPkg ? `$${item.price} / visit` : `From $${item.price}`)), /*#__PURE__*/React.createElement("p", {
    className: "sheet__desc"
  }, item.desc), isPkg && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "What's included"), tasks.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.id,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__dot"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 12,
    sw: 2.2
  })), /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, t.name), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(t.dur)))), item.off && /*#__PURE__*/React.createElement("div", {
    className: "infolist__save"
  }, "Save up to 15% on recurring orders")), !isPkg && item.steps && /*#__PURE__*/React.createElement("div", {
    className: "infolist"
  }, /*#__PURE__*/React.createElement("div", {
    className: "infolist__ttl"
  }, "Options"), item.steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "infolist__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "infolist__name"
  }, s.label), /*#__PURE__*/React.createElement("span", {
    className: "infolist__dur"
  }, "~", fmtDur(s.dur)), /*#__PURE__*/React.createElement("span", {
    className: "infolist__price"
  }, "$", s.price)))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block",
    onClick: onClose,
    style: {
      marginTop: 4
    }
  }, "Got it")));
}

/* ============================ Home (hero grid + floating bar) ============================ */
function Home({
  cart,
  dayIdx,
  setDayIdx,
  onTaskClick,
  onStep,
  onInfo,
  onTogglePkg,
  onOpenBooking
}) {
  const [mode, setMode] = useState("tasks");
  const itemBy = Object.fromEntries(cart.map(c => [c.taskId, c]));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim",
    style: {
      paddingBottom: 222
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hi"
  }, "Hello, Whit ", /*#__PURE__*/React.createElement("span", {
    className: "wave"
  }, "\uD83D\uDC4B")), /*#__PURE__*/React.createElement("h1", null, "Book your clean.")), /*#__PURE__*/React.createElement(Segmented, {
    mode: mode,
    setMode: setMode
  }), mode === "tasks" ? /*#__PURE__*/React.createElement("div", {
    className: "grid"
  }, TASKS.map(t => /*#__PURE__*/React.createElement(TaskCard, {
    key: t.id,
    task: t,
    item: itemBy[t.id],
    onToggle: onTaskClick,
    onStep: onStep,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Create Custom Task",
    sub: "Tell us what you need",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "blurb"
  }, "Save time, skip the guesswork. Choose a pre-built bundle that fits your routine and let Zing handle the rest."), /*#__PURE__*/React.createElement("div", {
    className: "pgrid"
  }, PACKAGES.map(p => /*#__PURE__*/React.createElement(PackageCard, {
    key: p.id,
    pkg: p,
    inCart: p.tasks.every(id => itemBy[id]),
    onToggle: onTogglePkg,
    onInfo: onInfo
  })), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.plus,
      w: 26
    }),
    title: "Build Custom Package",
    sub: "Choose your own tasks",
    onClick: () => setMode("tasks")
  }), /*#__PURE__*/React.createElement(GhostCard, {
    icon: /*#__PURE__*/React.createElement(LineIcon, {
      d: P.phone,
      w: 24
    }),
    title: "Request a Call",
    sub: "Get a custom quote",
    onClick: () => {}
  }))))), /*#__PURE__*/React.createElement(FloatingBar, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onOpen: onOpenBooking
  }));
}

/* ============================ Your bookings ============================ */
function bookingRow(b, done) {
  const d = b.date;
  return /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming" + (done ? " upcoming--done" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("span", null, MONTHS[d.getMonth()])), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, fmtDayLabel(d), " \xB7 ", fmtTime(b.start), " \u2013 ", fmtTime(b.start + b.dur))), /*#__PURE__*/React.createElement("span", {
    className: "vtag" + (done ? " vtag--done" : "")
  }, done ? "Done" : b.freq === "One-time" ? "Booked" : b.freq));
}
function Bookings({
  bookings,
  onBrowse
}) {
  const subs = bookings.filter(b => b.freq !== "One-time");
  const completed = [{
    id: "c1",
    title: "Vacuum & Floor Magic",
    date: addBusinessDays(startToday(), -6),
    start: 600,
    dur: 40,
    freq: "One-time"
  }, {
    id: "c2",
    title: "Zing Bathroom Clean (Full) + 1 more",
    date: addBusinessDays(startToday(), -11),
    start: 540,
    dur: 75,
    freq: "Weekly"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your bookings"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 18
  }), " Upcoming visits"), bookings.length ? bookings.map(b => bookingRow(b, false)) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cal,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No upcoming visits."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Book a clean \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 18
  }), " Subscriptions"), subs.length ? subs.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    className: "upcoming"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__date"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "upcoming__t"
  }, b.title), /*#__PURE__*/React.createElement("div", {
    className: "upcoming__s"
  }, b.freq, " \xB7 next ", fmtDayLabel(b.date), " ", fmtDateLabel(b.date))), /*#__PURE__*/React.createElement("span", {
    className: "vtag"
  }, b.freq))) : /*#__PURE__*/React.createElement("div", {
    className: "visitcard"
  }, /*#__PURE__*/React.createElement("div", {
    className: "visitcard__ico"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.refresh,
    w: 24
  })), /*#__PURE__*/React.createElement("p", null, "No recurring services yet."), /*#__PURE__*/React.createElement("a", {
    onClick: onBrowse
  }, "Set up a routine \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 18
  }), " Completed visits"), completed.map(b => bookingRow(b, true)))));
}

/* ============================ Confirmation ============================ */
function Confirm({
  booking,
  onDone
}) {
  const subtotal = booking.items.reduce((s, c) => s + c.price, 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm"
  }, /*#__PURE__*/React.createElement("div", {
    className: "confirm__badge"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 38,
    sw: 1.8
  })), /*#__PURE__*/React.createElement("h2", null, "You're all set."), /*#__PURE__*/React.createElement("p", null, "Your Zing visit is reserved for ", fmtDayLabel(booking.date), ", ", fmtDateLabel(booking.date), " from ", fmtTime(booking.start), " to ", fmtTime(booking.start + booking.dur), ". We'll take it from here.")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 18
  }), " Your visit"), booking.items.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.uid,
    className: "citem"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + c.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "citem__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "citem__name"
  }, c.name), /*#__PURE__*/React.createElement("div", {
    className: "citem__meta"
  }, c.opt ? `${c.opt} · ` : "", "~", fmtDur(c.dur))), /*#__PURE__*/React.createElement("div", {
    className: "citem__price"
  }, "$", c.price)))), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "When"), /*#__PURE__*/React.createElement("b", null, fmtDayLabel(booking.date), " ", fmtDateLabel(booking.date))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Time"), /*#__PURE__*/React.createElement("b", null, fmtTime(booking.start), " \u2013 ", fmtTime(booking.start + booking.dur))), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Frequency"), /*#__PURE__*/React.createElement("b", null, booking.freq)), /*#__PURE__*/React.createElement("div", {
    className: "totalrow"
  }, /*#__PURE__*/React.createElement("span", null, "Apartment"), /*#__PURE__*/React.createElement("b", null, "Bezel Miami \xB7 1925")), /*#__PURE__*/React.createElement("div", {
    className: "totalrow totalrow--grand"
  }, /*#__PURE__*/React.createElement("span", null, "Total"), /*#__PURE__*/React.createElement("span", {
    className: "amt"
  }, "$", subtotal))), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    onClick: onDone
  }, "Book another clean")));
}

/* ============================ Profile ============================ */
function Profile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "scroll"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pad page-anim"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "page-title"
  }, "Your profile"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.user,
    w: 18
  }), " Personal information"), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "Whit"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Phone number"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "770 656 0139"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Apartment"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    defaultValue: "Bezel Miami \xB7 1925"
  }), /*#__PURE__*/React.createElement("label", {
    className: "plabel"
  }, "Pets info"), /*#__PURE__*/React.createElement("input", {
    className: "pinput",
    placeholder: "e.g. friendly dog, please keep the bedroom door closed"
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--primary btn--block",
    style: {
      marginTop: 4
    }
  }, "Save changes")), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card__head"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.cart,
    w: 18
  }), " Payment methods"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--ink-600)",
      margin: "0 0 14px"
    }
  }, "You have no saved cards."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--ghost btn--block"
  }, "Add new card")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn--danger btn--block"
  }, "Log out")));
}

/* ============================ App ============================ */
function App() {
  // Demo boot via URL: ?preset=booking → three chores in cart, opens on Pick-a-Time
  const presetCart = useMemo(() => {
    let p;
    try {
      p = new URLSearchParams(location.search).get("preset");
    } catch (e) {
      p = null;
    }
    if (p !== "booking") return null;
    return ["dusting", "trash", "dishes"].map(id => TASK_BY_ID[id]).filter(Boolean).map(t => {
      const s = t.steps ? t.steps[0] : null;
      return {
        uid: t.id,
        taskId: t.id,
        name: t.name,
        price: s ? s.price : t.price,
        dur: s ? s.dur : t.dur,
        icon: t.icon,
        stepIdx: 0,
        opt: s ? s.label : null,
        note: ""
      };
    });
  }, []);
  const [tab, setTab] = useState("home");
  const [view, setView] = useState(presetCart ? "booking" : "app"); // "app" | "booking" | "checkout"
  const [dayIdx, setDayIdx] = useState(() => {
    if (!presetCart) return 0;
    const dur = presetCart.reduce((s, c) => s + c.dur, 0);
    const i = BUSINESS_DAYS.findIndex(d => firstFit(busyFor(d), dur) != null);
    return i >= 0 ? i : 0;
  });
  const [cart, setCart] = useState(presetCart || []);
  const [freq, setFreq] = useState("One-time");
  const [pending, setPending] = useState(null);
  const [confirmed, setConfirmed] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [infoItem, setInfoItem] = useState(null);
  const cartIds = new Set(cart.map(c => c.taskId));
  const mkItem = (t, stepIdx = 0) => {
    const s = t.steps ? t.steps[stepIdx] : null;
    return {
      uid: t.id,
      taskId: t.id,
      name: t.name,
      price: s ? s.price : t.price,
      dur: s ? s.dur : t.dur,
      icon: t.icon,
      stepIdx,
      opt: s ? s.label : null,
      note: ""
    };
  };
  const onTaskClick = task => {
    if (cartIds.has(task.id)) {
      setCart(c => c.filter(x => x.taskId !== task.id));
      return;
    }
    setCart(c => [...c, mkItem(task)]);
  };
  const stepItem = (task, delta) => setCart(c => c.map(x => {
    if (x.taskId !== task.id) return x;
    const i = Math.max(0, Math.min(task.steps.length - 1, x.stepIdx + delta));
    const s = task.steps[i];
    return {
      ...x,
      stepIdx: i,
      dur: s.dur,
      price: s.price,
      opt: s.label
    };
  }));
  const togglePkg = pkg => {
    const allIn = pkg.tasks.every(id => cartIds.has(id));
    if (allIn) setCart(c => c.filter(x => !pkg.tasks.includes(x.taskId)));else setCart(c => [...c, ...pkg.tasks.filter(id => !cartIds.has(id)).map(id => mkItem(TASK_BY_ID[id]))]);
  };
  const reserve = b => {
    setPending(b);
    setView("checkout");
  };
  const placeOrder = extra => {
    const booking = {
      id: "b" + Date.now(),
      ...pending,
      items: cart,
      freq,
      title: titleOf(cart),
      ...extra
    };
    setBookings(list => [booking, ...list]);
    setConfirmed(booking);
    setPending(null);
    setView("app");
  };
  const done = () => {
    setCart([]);
    setFreq("One-time");
    setConfirmed(null);
    setPending(null);
    setView("app");
    setTab("bookings");
  };
  const goTab = t => {
    setConfirmed(null);
    setView("app");
    setTab(t);
  };
  const chromeless = (view === "booking" || view === "checkout") && !confirmed;
  let body;
  if (confirmed) body = /*#__PURE__*/React.createElement(Confirm, {
    booking: confirmed,
    onDone: done
  });else if (view === "checkout") body = /*#__PURE__*/React.createElement(Checkout, {
    cart: cart,
    booking: pending,
    freq: freq,
    setFreq: setFreq,
    onBack: () => setView("booking"),
    onPlaceOrder: placeOrder
  });else if (view === "booking") body = /*#__PURE__*/React.createElement(BookingPage, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onBack: () => setView("app"),
    onReserve: reserve
  });else if (tab === "bookings") body = /*#__PURE__*/React.createElement(Bookings, {
    bookings: bookings,
    onBrowse: () => goTab("home")
  });else if (tab === "profile") body = /*#__PURE__*/React.createElement(Profile, null);else body = /*#__PURE__*/React.createElement(Home, {
    cart: cart,
    dayIdx: dayIdx,
    setDayIdx: setDayIdx,
    onTaskClick: onTaskClick,
    onStep: stepItem,
    onInfo: setInfoItem,
    onTogglePkg: togglePkg,
    onOpenBooking: () => setView("booking")
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "phone"
  }, /*#__PURE__*/React.createElement("div", {
    className: "phone-screen"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, !chromeless && /*#__PURE__*/React.createElement(AppBar, null), body, !chromeless && /*#__PURE__*/React.createElement(BottomNav, {
    tab: confirmed ? "bookings" : tab,
    setTab: goTab
  })), infoItem && /*#__PURE__*/React.createElement(InfoSheet, {
    item: infoItem,
    onClose: () => setInfoItem(null)
  })), /*#__PURE__*/React.createElement("div", {
    className: "phone-notch"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/components.jsx
try { (() => {
/* Zing Resident App · shared components (chrome, cards, timeline) */
const {
  useState,
  useRef
} = React;
const {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  px,
  totalHeight,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  openWindows,
  busyFor,
  firstFit,
  startToday,
  P,
  LineIcon
} = window;

/* ---------------- App bar (co-brand + Text us) ---------------- */
function AppBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "appbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cobrand"
  }, /*#__PURE__*/React.createElement("img", {
    className: "zing",
    src: "icons/zing-logo.svg",
    alt: "Zing"
  }), /*#__PURE__*/React.createElement("div", {
    className: "divider"
  }), /*#__PURE__*/React.createElement("img", {
    className: "bezel",
    src: "icons/bezel.webp",
    alt: "Bezel Miami"
  })), /*#__PURE__*/React.createElement("button", {
    className: "textus"
  }, "Text us"));
}

/* ---------------- Bottom navigation ---------------- */
function BottomNav({
  tab,
  setTab
}) {
  const items = [{
    id: "home",
    label: "Home",
    d: P.home
  }, {
    id: "bookings",
    label: "Your bookings",
    d: P.cal
  }, {
    id: "profile",
    label: "Profile",
    d: P.user
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "bnav"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    className: tab === it.id ? "on" : "",
    onClick: () => setTab(it.id)
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: it.d,
    w: 23
  }), /*#__PURE__*/React.createElement("span", null, it.label))));
}

/* ---------------- Compact swipeable date strip (arrows + chips) ---------------- */
function DateStrip({
  days,
  idx,
  setIdx
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const trackRef = useRef(null);
  React.useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const chip = el.children[idx];
    if (chip) el.scrollTo({
      left: chip.offsetLeft - el.clientWidth / 2 + chip.clientWidth / 2,
      behavior: "smooth"
    });
  }, [idx]);
  return /*#__PURE__*/React.createElement("div", {
    className: "datestrip"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.max(0, idx - 1)),
    disabled: idx === 0,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "datestrip__track",
    ref: trackRef
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "dchip" + (i === idx ? " dchip--on" : ""),
    onClick: () => setIdx(i)
  }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate())))), /*#__PURE__*/React.createElement("button", {
    className: "datestrip__arrow",
    onClick: () => setIdx(Math.min(days.length - 1, idx + 1)),
    disabled: idx === days.length - 1,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 18
  })));
}

/* ---------------- Tasks / Packages segmented ---------------- */
function Segmented({
  mode,
  setMode
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "seg",
    role: "tablist"
  }, /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "tasks",
    onClick: () => setMode("tasks")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.spark,
    w: 20
  })), " Tasks"), /*#__PURE__*/React.createElement("button", {
    role: "tab",
    "aria-selected": mode === "packages",
    onClick: () => setMode("packages")
  }, /*#__PURE__*/React.createElement("span", {
    className: "gi"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.bag,
    w: 19
  })), " Packages"));
}

/* ---------------- Task card (with on-card stepper for count-based tasks) ---------------- */
function TaskCard({
  task,
  item,
  onToggle,
  onStep,
  onInfo
}) {
  const inCart = !!item;
  const stepped = inCart && task.steps;
  const price = stepped ? task.steps[item.stepIdx].price : task.price;
  const dur = stepped ? task.steps[item.stepIdx].dur : task.dur;
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard" + (inCart ? " in-cart" : ""),
    onClick: () => {
      if (inCart && task.steps) return;
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(task);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(task);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: inCart && task.steps ? P.close : P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__icon" + (/\.png$/.test(task.icon) ? " tcard__icon--photo" : "")
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + task.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, task.name), stepped ? /*#__PURE__*/React.createElement("div", {
    className: "qstep",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, -1),
    disabled: item.stepIdx === 0,
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    className: "qstep__lbl"
  }, task.steps[item.stepIdx].label), /*#__PURE__*/React.createElement("button", {
    onClick: () => onStep(task, 1),
    disabled: item.stepIdx === task.steps.length - 1,
    "aria-label": "More"
  }, "+")) : null, /*#__PURE__*/React.createElement("div", {
    className: "tcard__dur"
  }, "~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "tcard__price"
  }, "$", price));
}
function GhostCard({
  icon,
  title,
  sub,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tcard tcard--ghost",
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "tcard__plus"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "tcard__name"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "tcard__sub"
  }, sub));
}

/* ---------------- Package card ---------------- */
function PackageCard({
  pkg,
  inCart,
  onToggle,
  onInfo
}) {
  const dur = pkg.tasks.reduce((s, id) => s + (TASK_BY_ID[id] ? TASK_BY_ID[id].dur : 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    className: "pcard" + (inCart ? " in-cart" : ""),
    onClick: () => onToggle(pkg)
  }, /*#__PURE__*/React.createElement("button", {
    className: "tcard__info",
    onClick: e => {
      e.stopPropagation();
      onInfo(pkg);
    },
    "aria-label": "What's included"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.info,
    w: 16
  })), inCart && /*#__PURE__*/React.createElement("span", {
    className: "tcard__check",
    onClick: e => {
      e.stopPropagation();
      onToggle(pkg);
    }
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.check,
    w: 14,
    sw: 2
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__icon"
  }, /*#__PURE__*/React.createElement("img", {
    src: ICONS + pkg.icon,
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    className: "pcard__name"
  }, pkg.name), /*#__PURE__*/React.createElement("div", {
    className: "pcard__dur"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.clock,
    w: 12
  }), " ~", fmtDur(dur)), /*#__PURE__*/React.createElement("div", {
    className: "pcard__starting"
  }, "Starting at"), /*#__PURE__*/React.createElement("div", {
    className: "pcard__price"
  }, "$", pkg.price, " ", /*#__PURE__*/React.createElement("small", null, "/ visit")), pkg.off && /*#__PURE__*/React.createElement("div", {
    className: "pcard__off"
  }, "Up to 15% off for Weekly,", /*#__PURE__*/React.createElement("br", null), "Bi-Weekly, Monthly orders"));
}

/* ---------------- Date navigator ---------------- */
function DateNav({
  date,
  onPrev,
  onNext,
  canPrev,
  canNext
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "datenav"
  }, /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onPrev,
    disabled: !canPrev,
    "aria-label": "Previous day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.left,
    w: 20
  })), /*#__PURE__*/React.createElement("div", {
    className: "datenav__label"
  }, /*#__PURE__*/React.createElement("div", {
    className: "datenav__day"
  }, fmtDayLabel(date)), /*#__PURE__*/React.createElement("div", {
    className: "datenav__date"
  }, fmtDateLabel(date))), /*#__PURE__*/React.createElement("button", {
    className: "datenav__btn",
    onClick: onNext,
    disabled: !canNext,
    "aria-label": "Next day"
  }, /*#__PURE__*/React.createElement(LineIcon, {
    d: P.right,
    w: 20
  })));
}

/* ---------------- Week strip (5 business days) ---------------- */
function WeekStrip({
  days,
  activeKey,
  onPick,
  freeness
}) {
  const DOW = ["S", "M", "T", "W", "T", "F", "S"];
  return /*#__PURE__*/React.createElement("div", {
    className: "weekstrip"
  }, days.map(d => {
    const k = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: "wchip" + (k === activeKey ? " wchip--on" : ""),
      onClick: () => onPick(d)
    }, /*#__PURE__*/React.createElement("span", null, DOW[d.getDay()]), /*#__PURE__*/React.createElement("b", null, d.getDate()), /*#__PURE__*/React.createElement("i", {
      className: "wchip__free"
    }));
  }));
}

/* ---------------- Day chips (rounded, availability dot left of label) ---------------- */
function DayChips({
  days,
  idx,
  onPick,
  dur,
  variant
}) {
  const DOW = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayKey = startToday().toDateString();
  return /*#__PURE__*/React.createElement("div", {
    className: "fdays" + (variant === "page" ? " fdays--page" : "")
  }, days.map((d, i) => {
    let cls = "fchip";
    if (dur > 0) cls += firstFit(busyFor(d), dur) != null ? " fchip--free" : " fchip--full";
    if (i === idx) cls += " fchip--on";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: cls,
      onClick: e => {
        e.stopPropagation();
        onPick(i);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "fchip__top"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fchip__dot"
    }), /*#__PURE__*/React.createElement("span", {
      className: "fchip__dow"
    }, d.toDateString() === todayKey ? "Today" : DOW[d.getDay()])), /*#__PURE__*/React.createElement("b", {
      className: "fchip__num"
    }, d.getDate()));
  }));
}

/* ---------------- Timeline legend ---------------- */
function TimelineLegend({
  booking
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tlhint"
  }, /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--free"
  }), " Open"), /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--busy"
  }), " Booked"), booking && /*#__PURE__*/React.createElement("i", null, /*#__PURE__*/React.createElement("span", {
    className: "sw sw--sel"
  }), " Your visit"));
}

/* ---------------- The day timeline ---------------- */
function Timeline({
  busy,
  dur,
  selStart,
  onPick,
  onDragStart,
  showOpen
}) {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const hours = [];
  for (let h = DAY_START / 60; h <= DAY_END / 60; h++) hours.push(h);
  const handleTap = e => {
    if (!onPick) return;
    const rect = trackRef.current.getBoundingClientRect();
    const y = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const minutes = DAY_START + y / HOUR_PX * 60;
    onPick(minutes);
  };
  const selDown = e => {
    if (!onDragStart) return;
    e.stopPropagation();
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    dragRef.current = {
      grab: py - px(selStart)
    };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };
  const selMove = e => {
    if (!dragRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const py = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    const startMin = DAY_START + (py - dragRef.current.grab) / HOUR_PX * 60;
    onDragStart(startMin);
  };
  const selUp = () => {
    dragRef.current = null;
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "timeline"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tl-gutter",
    style: {
      height: totalHeight
    }
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: h,
    className: "hr",
    style: {
      top: px(h * 60)
    }
  }, fmtTimeShort(h * 60)))), /*#__PURE__*/React.createElement("div", {
    className: "tl-track",
    ref: trackRef,
    style: {
      height: totalHeight
    },
    onClick: handleTap
  }, hours.map(h => /*#__PURE__*/React.createElement("div", {
    key: "g" + h,
    className: "tl-grid",
    style: {
      top: px(h * 60)
    }
  })), hours.slice(0, -1).map(h => /*#__PURE__*/React.createElement("div", {
    key: "gh" + h,
    className: "tl-grid tl-grid--half",
    style: {
      top: px(h * 60 + 30)
    }
  })), showOpen && openWindows(busy).filter(w => w.end - w.start >= 30).map((w, i) => {
    const h = px(w.end) - px(w.start);
    const covered = selStart != null && dur != null && selStart < w.end && selStart + dur > w.start;
    return /*#__PURE__*/React.createElement("div", {
      key: "o" + i,
      className: "tl-open",
      style: {
        top: px(w.start),
        height: h - 3
      }
    }, h >= 26 && !covered && /*#__PURE__*/React.createElement("span", {
      className: "tl-open__lbl"
    }, "Open \xB7 ", fmtDur(w.end - w.start)));
  }), busy.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: "b" + i,
    className: "tl-busy",
    style: {
      top: px(b.start),
      height: px(b.end) - px(b.start) - 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__lbl"
  }, b.label), px(b.end) - px(b.start) > 34 && /*#__PURE__*/React.createElement("span", {
    className: "tl-busy__sub"
  }, fmtTimeShort(b.start), "\u2013", fmtTimeShort(b.end), " \xB7 ", b.unit))), selStart != null && dur != null && /*#__PURE__*/React.createElement("div", {
    className: "tl-sel" + (onDragStart ? " tl-sel--drag" : ""),
    style: {
      top: px(selStart),
      height: px(selStart + dur) - px(selStart) - 3
    },
    onPointerDown: selDown,
    onPointerMove: selMove,
    onPointerUp: selUp,
    onPointerCancel: selUp
  }, /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--top"
  }), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__time"
  }, fmtTime(selStart), " \u2013 ", fmtTime(selStart + dur)), /*#__PURE__*/React.createElement("div", {
    className: "tl-sel__dur"
  }, onDragStart ? "Click or drag \u00b7 " : "", fmtDur(dur)), /*#__PURE__*/React.createElement("span", {
    className: "tl-sel__grip tl-sel__grip--bot"
  }))));
}
Object.assign(window, {
  AppBar,
  BottomNav,
  DateStrip,
  DayChips,
  Segmented,
  TaskCard,
  GhostCard,
  PackageCard,
  DateNav,
  WeekStrip,
  TimelineLegend,
  Timeline
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/resident-scheduling/data.jsx
try { (() => {
/* Zing Resident App · data + helpers + line icons
   Exposed on window for the other Babel scripts. */

const ICONS = "icons/";

/* ---- Service catalogue (matches the live Tasks menu) ---- */
const TASKS = [{
  id: "bathroom",
  name: "Zing Bathroom Clean (Full)",
  price: 35,
  dur: 45,
  icon: "bathroom.webp",
  desc: "Making bathrooms sparkle like a 5-star hotel. Toilet + sink scrub, shower & tub scrub, floors swept and mopped, mirrors wiped, surfaces disinfected and trash emptied.",
  opt: {
    label: "How many bathrooms?",
    noun: "bathrooms"
  },
  steps: [{
    label: "1 bathroom",
    dur: 45,
    price: 35
  }, {
    label: "2 bathrooms",
    dur: 75,
    price: 60
  }, {
    label: "3 bathrooms",
    dur: 105,
    price: 85
  }]
}, {
  id: "floor",
  name: "Vacuum & Floor Magic",
  price: 40,
  dur: 40,
  icon: "floor_magic.webp",
  desc: "A full-apartment vacuum and mop. Floors left spotless, streak-free and quietly fresh.",
  opt: {
    label: "Apartment size",
    noun: "home"
  },
  steps: [{
    label: "1 bedroom",
    dur: 40,
    price: 40
  }, {
    label: "2 bedroom",
    dur: 55,
    price: 55
  }, {
    label: "3 bedroom",
    dur: 70,
    price: 70
  }]
}, {
  id: "dusting",
  name: "Surface Dusting",
  price: 30,
  dur: 30,
  icon: "countertop.webp",
  desc: "Shelves, sills, tables and electronics gently dusted and wiped down throughout your space."
}, {
  id: "trash",
  name: "Trash & Recycling Run",
  price: 1,
  dur: 10,
  icon: "trash.webp",
  desc: "We gather, sort and take out the trash and recycling, and reline every bin."
}, {
  id: "balcony",
  name: "Balcony Refresh",
  price: 32,
  dur: 35,
  icon: "balcony.webp",
  desc: "Sweep, wipe and tidy your balcony — railings, floor and furniture left guest-ready."
}, {
  id: "windows",
  name: "Complete Window Cleaning",
  price: 12,
  dur: 30,
  icon: "window.webp",
  desc: "Interior glass and sills cleaned to a clear, streak-free shine.",
  opt: {
    label: "How many windows?",
    noun: "windows"
  },
  steps: [{
    label: "Up to 3 windows",
    dur: 30,
    price: 12
  }, {
    label: "4\u20136 windows",
    dur: 45,
    price: 20
  }, {
    label: "7\u201310 windows",
    dur: 60,
    price: 30
  }]
}, {
  id: "plants",
  name: "Watering Plants",
  price: 3,
  dur: 10,
  icon: "plants.webp",
  desc: "We water and check on your plants so everything stays lush while life is busy."
}, {
  id: "couch",
  name: "Couch & Throw Pillow Refresh",
  price: 3,
  dur: 15,
  icon: "couch.webp",
  desc: "Cushions fluffed, throws folded and the sofa reset to a calm, hotel-lobby tidy."
}, {
  id: "bed",
  name: "Bed Linen Refresh",
  price: 8,
  dur: 20,
  icon: "bed.webp",
  desc: "Fresh, crisp linens and a tightly-made bed — turned down like a suite."
}, {
  id: "dishes",
  name: "Dish Washing",
  price: 13,
  dur: 25,
  icon: "dishes.webp",
  desc: "Dishes washed, dried and put away, sink wiped down and left gleaming."
}, {
  id: "fridge",
  name: "Fridge Cleanout",
  price: 35,
  dur: 40,
  icon: "fridge.webp",
  desc: "Interior wiped, shelves cleaned and expired items cleared — fresh and organised."
}, {
  id: "oven",
  name: "Zing Oven Clean",
  price: 35,
  dur: 45,
  icon: "oven.webp",
  desc: "A deep degrease of the oven interior, racks and glass door, back to like-new."
}, {
  id: "spill",
  name: "Wine & Coffee Spill Treatment",
  price: 9,
  dur: 20,
  icon: "spill.webp",
  desc: "Fast, gentle treatment of fresh wine, coffee and food stains on fabric and floors."
}, {
  id: "laundry",
  name: "Zing Laundry Service",
  price: 15,
  dur: 50,
  icon: "laundry.webp",
  desc: "Wash and dry a load of laundry with premium detergent and fabric care.",
  opt: {
    label: "How many loads?",
    noun: "loads"
  },
  steps: [{
    label: "1 load",
    dur: 50,
    price: 15
  }, {
    label: "2 loads",
    dur: 85,
    price: 28
  }, {
    label: "3 loads",
    dur: 120,
    price: 40
  }]
}, {
  id: "folding",
  name: "Clothes Folding",
  price: 16,
  dur: 25,
  icon: "folding.webp",
  desc: "Clean laundry neatly folded and stacked, hotel-housekeeping style."
}, {
  id: "groceries",
  name: "Put Away Groceries",
  price: 3,
  dur: 15,
  icon: "groceries.webp",
  desc: "We unpack and organise your delivery into pantry and fridge so it's ready to use."
}, {
  id: "deodorize",
  name: "Deodorizing",
  price: 5,
  dur: 10,
  icon: "deodorize.webp",
  desc: "A light, natural deodorizing pass leaves your space smelling clean and calm."
}];
const TASK_BY_ID = Object.fromEntries(TASKS.map(t => [t.id, t]));

/* ---- Packages ---- */
const PACKAGES = [{
  id: "full",
  name: "Full Apartment Clean",
  price: 116,
  off: true,
  tasks: ["bathroom", "floor", "dusting", "trash", "bed"],
  icon: "couch.webp",
  desc: "Our signature top-to-bottom reset. We clean the bathroom, vacuum and mop every floor, dust all surfaces, take out the trash and refresh the bed linens — your whole apartment handled in one visit."
}, {
  id: "kitchen",
  name: "Kitchen Commander",
  price: 89,
  off: true,
  tasks: ["dishes", "oven", "fridge", "dusting"],
  icon: "oven.webp",
  desc: "A complete kitchen reset in one visit. We wash, dry and put away the dishes, deep-degrease the oven inside and out, wipe down and declutter the fridge, and dust and sanitize every counter and surface — the whole kitchen left spotless."
}, {
  id: "weekly",
  name: "Smart Weekly Care",
  price: 67,
  off: false,
  tasks: ["dusting", "floor", "trash"],
  icon: "bathroom.webp",
  desc: "A light, regular upkeep visit to keep things effortlessly tidy — surfaces dusted, floors vacuumed and mopped, and trash taken out. Best on a weekly rhythm."
}, {
  id: "biweekly",
  name: "Smart Bi-Weekly Care",
  price: 69,
  off: false,
  tasks: ["bathroom", "floor", "dusting"],
  icon: "window.webp",
  desc: "A slightly deeper every-other-week refresh — a full bathroom clean plus floors vacuumed and mopped and all surfaces dusted. The easy middle-ground routine."
}];

/* ---- Operating hours ---- */
const DAY_START = 8 * 60; // 8:00 AM
const DAY_END = 18 * 60; // 6:00 PM
const HOUR_PX = 64; // vertical px per hour
const SNAP = 15; // minute snap
const px = min => (min - DAY_START) / 60 * HOUR_PX;
const totalHeight = (DAY_END - DAY_START) / 60 * HOUR_PX;

/* ---- Date helpers (Mon–Fri only) ---- */
const DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function startToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d;
}
function addBusinessDays(date, n) {
  const d = new Date(date);
  let step = n >= 0 ? 1 : -1;
  let left = Math.abs(n);
  while (left > 0) {
    d.setDate(d.getDate() + step);
    if (d.getDay() !== 0 && d.getDay() !== 6) left--;
  }
  return d;
}
const dateKey = d => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
const fmtDayLabel = d => `${DAYNAMES[d.getDay()]}`;
const fmtDateLabel = d => `${MONTHS[d.getMonth()]} ${d.getDate()}`;

/* ---- Time formatting ---- */
function fmtTime(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "PM" : "AM";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}:00 ${ap}` : `${hh}:${String(m).padStart(2, "0")} ${ap}`;
}
function fmtTimeShort(min) {
  let h = Math.floor(min / 60),
    m = min % 60;
  const ap = h >= 12 ? "p" : "a";
  let hh = h % 12;
  if (hh === 0) hh = 12;
  return m === 0 ? `${hh}${ap}` : `${hh}:${String(m).padStart(2, "0")}${ap}`;
}
function fmtDur(min) {
  const h = Math.floor(min / 60),
    m = min % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} hr`;
  return `${h} hr ${m} min`;
}

/* ---- Deterministic "already booked" blocks per day ----
   Booking load rotates so the 5-day strip always shows variety:
   ~1 in 5 days is FULL (red the moment you add anything),
   ~1 in 5 is HEAVY (only short tasks fit), the rest are OPEN. */
function seeded(n) {
  let x = Math.sin(n) * 10000;
  return x - Math.floor(x);
}
const BUSY_LABELS = ["Full apartment clean", "Bathroom deep clean", "Kitchen reset", "Vacuum & floors", "Window cleaning", "Laundry service", "Fridge cleanout", "Dusting & tidy"];
const FLOOR_ORD = ["3rd", "5th", "7th", "9th", "11th", "12th", "14th", "17th", "19th", "21st", "24th", "28th"];
function dayLoad(d) {
  const ord = Math.floor(d.getTime() / 86400000);
  const m = (ord % 5 + 5) % 5;
  if (m === 0) return "full";
  if (m === 2) return "heavy";
  return "open";
}
function busyFor(d) {
  const seed = d.getFullYear() * 1000 + d.getMonth() * 40 + d.getDate();
  const load = dayLoad(d);
  const blocks = [];
  const lbl = i => BUSY_LABELS[Math.floor(seeded(seed * 13 + i) * BUSY_LABELS.length)];
  const unit = i => FLOOR_ORD[Math.floor(seeded(seed * 17 + i) * FLOOR_ORD.length)] + " floor";
  if (load === "full") {
    // fully booked — packed wall-to-wall, no usable gap (red for anything)
    let cursor = DAY_START;
    let i = 0;
    while (cursor < DAY_END) {
      const len = (3 + Math.floor(seeded(seed * 7 + i * 5) * 4)) * SNAP; // 45–90 min
      let end = cursor + len;
      if (end > DAY_END - 30) end = DAY_END; // clamp: no leftover window
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      if (end >= DAY_END) break;
      cursor = end + (seeded(seed * 3 + i) < .5 ? 0 : SNAP); // 0–15 min seam
      i++;
    }
  } else if (load === "heavy") {
    // packed, leaving only 30–45 min windows — short tasks fit, bundles don't
    let cursor = DAY_START + (seeded(seed * 2) < .5 ? 0 : SNAP);
    let i = 0;
    while (cursor < DAY_END - 30) {
      const len = (4 + Math.floor(seeded(seed * 7 + i * 5) * 3)) * SNAP; // 60–90 min
      const end = Math.min(cursor + len, DAY_END);
      blocks.push({
        start: cursor,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      const gap = (2 + Math.floor(seeded(seed * 11 + i * 3) * 2)) * SNAP; // 30–45 min
      cursor = end + gap;
      i++;
    }
  } else {
    // open day — a handful of scattered bookings, lots of room
    const count = 2 + Math.floor(seeded(seed) * 3); // 2–4 blocks
    let cursor = DAY_START + Math.floor(seeded(seed * 2) * 6) * SNAP;
    for (let i = 0; i < count; i++) {
      const gap = (1 + Math.floor(seeded(seed * 7 + i * 3) * 5)) * SNAP; // 15–75 min gap
      const len = (2 + Math.floor(seeded(seed * 11 + i * 5) * 5)) * SNAP; // 30–90 min
      const start = cursor + gap;
      const end = start + len;
      if (end > DAY_END - 15) break;
      blocks.push({
        start,
        end,
        label: lbl(i),
        unit: unit(i)
      });
      cursor = end;
    }
  }
  return blocks;
}

/* ---- Open windows = gaps between busy blocks within hours ---- */
function openWindows(busy) {
  const sorted = [...busy].sort((a, b) => a.start - b.start);
  const wins = [];
  let cursor = DAY_START;
  for (const b of sorted) {
    if (b.start - cursor >= SNAP) wins.push({
      start: cursor,
      end: b.start
    });
    cursor = Math.max(cursor, b.end);
  }
  if (DAY_END - cursor >= SNAP) wins.push({
    start: cursor,
    end: DAY_END
  });
  return wins;
}

/* ---- Find first valid start for a duration on a day ---- */
function firstFit(busy, dur) {
  for (const w of openWindows(busy)) {
    if (w.end - w.start >= dur) return w.start;
  }
  return null;
}
/* ---- Is a [start, start+dur) block valid (in hours, no overlap)? ---- */
function fits(busy, start, dur) {
  if (start < DAY_START || start + dur > DAY_END) return false;
  return !busy.some(b => start < b.end && start + dur > b.start);
}
/* ---- Snap an arbitrary minute to a valid start near it ---- */
function snapValid(busy, raw, dur) {
  let start = Math.round((raw - dur / 2) / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  // search outward for nearest fitting start
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}
/* ---- Snap a START minute (anchored at top, for tap + drag) to nearest valid ---- */
function snapStart(busy, rawStart, dur) {
  let start = Math.round(rawStart / SNAP) * SNAP;
  start = Math.max(DAY_START, Math.min(start, DAY_END - dur));
  if (fits(busy, start, dur)) return start;
  for (let step = SNAP; step <= DAY_END - DAY_START; step += SNAP) {
    if (fits(busy, start - step, dur)) return start - step;
    if (fits(busy, start + step, dur)) return start + step;
  }
  return firstFit(busy, dur);
}

/* ---------------- Line icons (UI chrome) ---------------- */
const P = {
  home: "M3 11l9-8 9 8M5 9.5V20h14V9.5",
  cal: "M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM4 9.5h16M8 3.5v3M16 3.5v3",
  user: "M4.5 20a7.5 7.5 0 0 1 15 0M12 11.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5",
  cart: "M3 4h2.2l1.9 11.2a1.5 1.5 0 0 0 1.48 1.25h8.32a1.5 1.5 0 0 0 1.47-1.2L20.5 7H6.2M9.5 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2M17 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2",
  left: "M15 5l-7 7 7 7",
  right: "M9 5l7 7-7 7",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 12.5l4.5 4.5L19 7",
  clock: "M12 7.5v5l3 2M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18",
  plus: "M12 5v14M5 12h14",
  phone: "M6.5 3.5h3l1.2 4-2 1.4a12 12 0 0 0 4.9 4.9l1.4-2 4 1.2v3a1.6 1.6 0 0 1-1.7 1.6A15.5 15.5 0 0 1 4.9 5.2 1.6 1.6 0 0 1 6.5 3.5",
  trash: "M5 7h14M9 7V5h6v2M7 7l.8 12.2A1 1 0 0 0 8.8 20h6.4a1 1 0 0 0 1-0.8L17 7M10 11v5M14 11v5",
  refresh: "M4 11a8 8 0 0 1 13.5-4.5L20 9M20 4v5h-5M20 13a8 8 0 0 1-13.5 4.5L4 15M4 20v-5h5",
  spark: "M12 3l1.6 5L19 9.6 13.6 11 12 16l-1.6-5L5 9.6 10.4 8z",
  edit: "M4 20h4l10-10-4-4L4 16zM14 6l4 4",
  bag: "M6 8h12l-1 12H7zM9 8V6a3 3 0 0 1 6 0v2",
  info: "M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18M12 11v5M12 7.5h.01"
};
function LineIcon({
  d,
  w = 22,
  sw = 1.6,
  style
}) {
  return React.createElement("svg", {
    width: w,
    height: w,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style
  }, React.createElement("path", {
    d
  }));
}
Object.assign(window, {
  ICONS,
  TASKS,
  TASK_BY_ID,
  PACKAGES,
  DAY_START,
  DAY_END,
  HOUR_PX,
  SNAP,
  px,
  totalHeight,
  startToday,
  addBusinessDays,
  dateKey,
  fmtDayLabel,
  fmtDateLabel,
  fmtTime,
  fmtTimeShort,
  fmtDur,
  busyFor,
  openWindows,
  firstFit,
  fits,
  snapValid,
  snapStart,
  P,
  LineIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/resident-scheduling/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
