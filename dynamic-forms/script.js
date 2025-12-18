// Events JSON array with different templates and configurations
const EVENTS = [
  {
    id: "event_001",
    name: "International Flight Booking",
    description: "Complete passenger information for international flights",
    formTemplateId: "international_flight",
    collectForAll: true,
    eventType: "flight",
    template: {
      display: "form",
      components: [
        {
          label: "Full Name",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "fullName",
          type: "textfield",
          input: true,
          validate: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: "^[a-zA-Z\\s]+$",
            patternMessage: "Full name should only contain letters and spaces",
          },
        },
        {
          label: "Passport Number",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "passportNumber",
          type: "textfield",
          input: true,
          validate: {
            required: true,
            pattern: "^[A-Z0-9]{6,9}$",
            patternMessage: "Passport number should be 6-9 characters with only uppercase letters and numbers",
          },
        },
        {
          label: "Date of Birth",
          hideInputLabels: false,
          inputsLabelPosition: "top",
          tableView: false,
          validateWhenHidden: false,
          key: "dateOfBirth",
          type: "datetime",
          input: true,
          widget: {
            type: "calendar",
            displayInTimezone: "viewer",
            locale: "en",
            useLocaleSettings: false,
            allowInput: true,
            mode: "single",
            enableTime: false,
            noCalendar: false,
            format: "yyyy-MM-dd",
            minDate: "1900-01-01",
            maxDate: new Date().toISOString().split("T")[0],
          },
          validate: {
            required: true,
          },
        },
        {
          label: "Nationality",
          widget: "choicesjs",
          tableView: true,
          validateWhenHidden: false,
          key: "nationality",
          type: "select",
          input: true,
          data: {
            values: [
              { value: "", label: "Select Nationality" },
              { value: "US", label: "United States" },
              { value: "UK", label: "United Kingdom" },
              { value: "CA", label: "Canada" },
              { value: "AU", label: "Australia" },
              { value: "IN", label: "India" },
            ],
          },
          validate: {
            required: true,
          },
        },
        {
          label: "Submit",
          showValidations: false,
          tableView: false,
          key: "submit",
          type: "button",
          input: true,
          disableOnInvalid: true,
        },
      ],
    },
  },
  {
    id: "event_002",
    name: "Domestic Flight Check-in",
    description: "Basic information for domestic flight check-in",
    formTemplateId: "domestic_flight",
    collectForAll: false,
    eventType: "flight",
    template: {
      display: "form",
      components: [
        {
          label: "Full Name",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "fullName",
          type: "textfield",
          input: true,
          validate: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: "^[a-zA-Z\\s]+$",
            patternMessage: "Full name should only contain letters and spaces",
          },
        },
        {
          label: "Booking Reference",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "bookingReference",
          type: "textfield",
          input: true,
          validate: {
            required: true,
            pattern: "^[A-Z0-9]{6}$",
            patternMessage: "Booking reference should be 6 characters with only uppercase letters and numbers",
          },
        },
        {
          label: "Seat Preference",
          widget: "choicesjs",
          tableView: true,
          validateWhenHidden: false,
          key: "seatPreference",
          type: "select",
          input: true,
          data: {
            values: [
              { value: "", label: "No Preference" },
              { value: "window", label: "Window" },
              { value: "aisle", label: "Aisle" },
              { value: "middle", label: "Middle" },
            ],
          },
        },
        {
          label: "Submit",
          showValidations: false,
          tableView: false,
          key: "submit",
          type: "button",
          input: true,
          disableOnInvalid: true,
        },
      ],
    },
  },
  {
    id: "event_003",
    name: "Hotel Reservation",
    description: "Guest information for hotel booking",
    formTemplateId: "hotel_booking",
    collectForAll: true,
    eventType: "hotel",
    template: {
      display: "form",
      components: [
        {
          label: "Guest Name",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "guestName",
          type: "textfield",
          input: true,
          validate: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: "^[a-zA-Z\\s]+$",
            patternMessage: "Guest name should only contain letters and spaces",
          },
        },
        {
          label: "Age",
          applyMaskOn: "change",
          mask: false,
          tableView: false,
          delimiter: false,
          requireDecimal: false,
          inputFormat: "plain",
          truncateMultipleSpaces: false,
          validateWhenHidden: false,
          key: "age",
          type: "number",
          input: true,
          validate: {
            required: true,
            min: 1,
            max: 120,
            integer: true,
          },
        },
        {
          label: "Room Type Preference",
          widget: "choicesjs",
          tableView: true,
          validateWhenHidden: false,
          key: "roomType",
          type: "select",
          input: true,
          data: {
            values: [
              { value: "", label: "No Preference" },
              { value: "single", label: "Single Room" },
              { value: "double", label: "Double Room" },
              { value: "suite", label: "Suite" },
            ],
          },
        },
        {
          label: "Special Requests",
          applyMaskOn: "change",
          autoExpand: false,
          tableView: true,
          validateWhenHidden: false,
          key: "specialRequests",
          type: "textarea",
          input: true,
          validate: {
            maxLength: 500,
            pattern: "^[a-zA-Z0-9\\s\\.,!?\\-]+$",
            patternMessage: "Only letters, numbers, spaces and basic punctuation allowed",
          },
        },
        {
          label: "Submit",
          showValidations: false,
          tableView: false,
          key: "submit",
          type: "button",
          input: true,
          disableOnInvalid: true,
        },
      ],
    },
  },
  {
    id: "event_004",
    name: "Event Registration",
    description: "Basic registration for events and conferences",
    formTemplateId: "event_registration",
    collectForAll: false,
    eventType: "event",
    template: {
      display: "form",
      components: [
        {
          label: "Attendee Name",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "attendeeName",
          type: "textfield",
          input: true,
          validate: {
            required: true,
            minLength: 2,
            maxLength: 50,
            pattern: "^[a-zA-Z\\s]+$",
            patternMessage: "Attendee name should only contain letters and spaces",
          },
        },
        {
          label: "Email Address",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "email",
          type: "email",
          input: true,
          validate: {
            required: true,
          },
        },
        {
          label: "Company/Organization",
          applyMaskOn: "change",
          tableView: true,
          validateWhenHidden: false,
          key: "company",
          type: "textfield",
          input: true,
          validate: {
            maxLength: 100,
            pattern: "^[a-zA-Z0-9\\s\\.,&\\-]+$",
            patternMessage: "Company name should only contain letters, numbers, spaces and basic punctuation",
          },
        },
        {
          label: "Dietary Restrictions",
          widget: "choicesjs",
          tableView: true,
          validateWhenHidden: false,
          key: "dietaryRestrictions",
          type: "select",
          input: true,
          multiple: true,
          data: {
            values: [
              { value: "none", label: "None" },
              { value: "vegetarian", label: "Vegetarian" },
              { value: "vegan", label: "Vegan" },
              { value: "gluten_free", label: "Gluten Free" },
              { value: "halal", label: "Halal" },
              { value: "kosher", label: "Kosher" },
            ],
          },
        },
        {
          label: "Submit",
          showValidations: false,
          tableView: false,
          key: "submit",
          type: "button",
          input: true,
          disableOnInvalid: true,
        },
      ],
    },
  },
]

// Default passenger template in Form.io format with enhanced validation
let CURRENT_TEMPLATE = {
  display: "form",
  components: [
    {
      label: "Full Name",
      applyMaskOn: "change",
      tableView: true,
      validateWhenHidden: false,
      key: "fullName",
      type: "textfield",
      input: true,
      validate: {
        required: true,
        minLength: 2,
        maxLength: 50,
        pattern: "^[a-zA-Z\\s]+$",
        patternMessage: "Full name should only contain letters and spaces",
      },
    },
    {
      label: "Age",
      applyMaskOn: "change",
      mask: false,
      tableView: false,
      delimiter: false,
      requireDecimal: false,
      inputFormat: "plain",
      truncateMultipleSpaces: false,
      validateWhenHidden: false,
      key: "age",
      type: "number",
      input: true,
      validate: {
        required: true,
        min: 1,
        max: 120,
        integer: true,
      },
    },
    {
      label: "Gender",
      widget: "choicesjs",
      tableView: true,
      validateWhenHidden: false,
      key: "gender",
      type: "select",
      input: true,
      data: {
        values: [
          { value: "", label: "Select Gender" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "other", label: "Other" },
          { value: "prefer_not_to_say", label: "Prefer not to say" },
        ],
      },
      validate: {
        required: true,
      },
    },
    {
      label: "Submit",
      showValidations: false,
      tableView: false,
      key: "submit",
      type: "button",
      input: true,
      disableOnInvalid: true,
    },
  ],
}

// Sample Form.io templates with enhanced validation
const SAMPLE_TEMPLATES = {
  basic: {
    display: "form",
    components: [
      {
        label: "Text Field",
        applyMaskOn: "change",
        tableView: true,
        validateWhenHidden: false,
        key: "textField",
        type: "textfield",
        input: true,
        validate: {
          required: true,
          minLength: 2,
          maxLength: 100,
          pattern: "^[a-zA-Z0-9\\s]+$",
          patternMessage: "Only letters, numbers and spaces are allowed",
        },
      },
      {
        label: "Number",
        applyMaskOn: "change",
        mask: false,
        tableView: false,
        delimiter: false,
        requireDecimal: false,
        inputFormat: "plain",
        truncateMultipleSpaces: false,
        validateWhenHidden: false,
        key: "number",
        type: "number",
        input: true,
        validate: {
          required: true,
          min: 1,
          max: 1000,
          integer: true,
        },
      },
      {
        label: "Password",
        applyMaskOn: "change",
        tableView: false,
        validateWhenHidden: false,
        key: "password",
        type: "password",
        input: true,
        protected: true,
        validate: {
          required: true,
          minLength: 6,
          maxLength: 20,
        },
      },
      {
        label: "Text Area",
        applyMaskOn: "change",
        autoExpand: false,
        tableView: true,
        validateWhenHidden: false,
        key: "textArea",
        type: "textarea",
        input: true,
        validate: {
          maxLength: 500,
          pattern: "^[a-zA-Z0-9\\s\\.,!?]+$",
          patternMessage: "Only letters, numbers, spaces and basic punctuation allowed",
        },
      },
      {
        label: "Submit",
        showValidations: false,
        tableView: false,
        key: "submit",
        type: "button",
        input: true,
        disableOnInvalid: true,
      },
    ],
  },
  passenger: {
    display: "form",
    components: [
      {
        label: "Passenger Name",
        applyMaskOn: "change",
        tableView: true,
        validateWhenHidden: false,
        key: "passengerName",
        type: "textfield",
        input: true,
        validate: {
          required: true,
          minLength: 2,
          maxLength: 50,
          pattern: "^[a-zA-Z\\s]+$",
          patternMessage: "Name should only contain letters and spaces",
        },
      },
      {
        label: "Date of Birth",
        hideInputLabels: false,
        inputsLabelPosition: "top",
        tableView: false,
        validateWhenHidden: false,
        key: "dateOfBirth",
        type: "datetime",
        input: true,
        widget: {
          type: "calendar",
          displayInTimezone: "viewer",
          locale: "en",
          useLocaleSettings: false,
          allowInput: true,
          mode: "single",
          enableTime: false,
          noCalendar: false,
          format: "yyyy-MM-dd",
          hourIncrement: 1,
          minuteIncrement: 1,
          time_24hr: false,
          minDate: "1900-01-01",
          maxDate: new Date().toISOString().split("T")[0],
          disableWeekends: false,
          disableWeekdays: false,
        },
        validate: {
          required: true,
        },
      },
      {
        label: "Passport Number",
        applyMaskOn: "change",
        tableView: true,
        validateWhenHidden: false,
        key: "passportNumber",
        type: "textfield",
        input: true,
        validate: {
          required: true,
          pattern: "^[A-Z0-9]{6,9}$",
          patternMessage: "Passport number should be 6-9 characters with only uppercase letters and numbers",
        },
      },
      {
        label: "Nationality",
        widget: "choicesjs",
        tableView: true,
        validateWhenHidden: false,
        key: "nationality",
        type: "select",
        input: true,
        data: {
          values: [
            { value: "", label: "Select Nationality" },
            { value: "US", label: "United States" },
            { value: "UK", label: "United Kingdom" },
            { value: "CA", label: "Canada" },
            { value: "AU", label: "Australia" },
            { value: "IN", label: "India" },
            { value: "DE", label: "Germany" },
            { value: "FR", label: "France" },
          ],
        },
        validate: {
          required: true,
        },
      },
      {
        label: "Submit",
        showValidations: false,
        tableView: false,
        key: "submit",
        type: "button",
        input: true,
        disableOnInvalid: true,
      },
    ],
  },
}

// Salt for MD5 hashing
const SALT = "abcdef"

// Form.io instance
let formioInstance = null
let selectedEvents = [] // Array to store multiple selected events
let currentMode = "custom" // "event" or "custom"

// Import jQuery and CryptoJS
const $ = window.jQuery
const CryptoJS = window.CryptoJS

// Server-side validation functions
const ServerValidation = {
  // HTML tag patterns to detect
  HTML_TAG_PATTERNS: [
    /<\s*script[^>]*>.*?<\s*\/\s*script\s*>/gi,
    /<\s*iframe[^>]*>.*?<\s*\/\s*iframe\s*>/gi,
    /<\s*object[^>]*>.*?<\s*\/\s*object\s*>/gi,
    /<\s*embed[^>]*>/gi,
    /<\s*link[^>]*>/gi,
    /<\s*meta[^>]*>/gi,
    /<\s*style[^>]*>.*?<\s*\/\s*style\s*>/gi,
    /<\s*form[^>]*>.*?<\s*\/\s*form\s*>/gi,
    /<\s*input[^>]*>/gi,
    /<\s*button[^>]*>.*?<\s*\/\s*button\s*>/gi,
    /<\s*a[^>]*>.*?<\s*\/\s*a\s*>/gi,
    /<\s*img[^>]*>/gi,
    /<\s*video[^>]*>.*?<\s*\/\s*video\s*>/gi,
    /<\s*audio[^>]*>.*?<\s*\/\s*audio\s*>/gi,
    /<\s*canvas[^>]*>.*?<\s*\/\s*canvas\s*>/gi,
    /<\s*svg[^>]*>.*?<\s*\/\s*svg\s*>/gi,
  ],

  // Fragment patterns
  FRAGMENT_PATTERNS: [
    /<>/g,
    /<\/>/g,
    /<\s*React\.Fragment\s*>/gi,
    /<\s*\/\s*React\.Fragment\s*>/gi,
    /<\s*Fragment\s*>/gi,
    /<\s*\/\s*Fragment\s*>/gi,
  ],

  // JavaScript patterns
  JAVASCRIPT_PATTERNS: [
    /javascript\s*:/gi,
    /on\w+\s*=/gi,
    /eval\s*\(/gi,
    /setTimeout\s*\(/gi,
    /setInterval\s*\(/gi,
    /Function\s*\(/gi,
    /new\s+Function/gi,
    /document\s*\./gi,
    /window\s*\./gi,
    /alert\s*\(/gi,
    /confirm\s*\(/gi,
    /prompt\s*\(/gi,
  ],

  // SQL injection patterns
  SQL_INJECTION_PATTERNS: [
    /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE)\b)/gi,
    /(UNION\s+SELECT)/gi,
    /('|(\\x27)|(\\x2D\\x2D)|(%27)|(%2D%2D))/gi,
    /((%3D)|(=))[^\n]*((%27)|(\\x27)|(')|(--)|(%3B)|(;))/gi,
    /\w*((%27)|('))((%6F)|o|(%4F))((%72)|r|(%52))/gi,
    /((%27)|('))union/gi,
  ],

  // XSS patterns
  XSS_PATTERNS: [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /vbscript:/gi,
    /onload=/gi,
    /onerror=/gi,
    /onclick=/gi,
    /onmouseover=/gi,
    /onfocus=/gi,
    /onblur=/gi,
    /onchange=/gi,
    /onsubmit=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /<applet/gi,
    /<meta/gi,
    /<link/gi,
  ],

  // Additional banned characters and patterns
  BANNED_CHARS_PATTERNS: [
    /[\u0000-\u001F\u007F-\u009F]/g, // Control characters
    /[\u2028\u2029]/g, // Line/paragraph separators
    /[\uFFFE\uFFFF]/g, // BOM markers
    /[\uD800-\uDFFF]/g, // Surrogate pairs
    /[\u200B-\u200D\uFEFF]/g, // Zero-width characters
  ],

  // Validate individual field
  validateField: function (fieldName, fieldValue, fieldType = "text") {
    const results = []

    if (fieldValue === null || fieldValue === undefined) {
      return results
    }

    const stringValue = String(fieldValue)

    // Check for empty or whitespace-only values
    if (stringValue.trim() === "") {
      return results
    }

    // Check for HTML tags
    this.HTML_TAG_PATTERNS.forEach((pattern, index) => {
      if (pattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "HTML Tag Detected",
          description: `Potentially dangerous HTML tag found in field "${fieldName}"`,
          pattern: pattern.toString(),
          value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
        })
      }
    })

    // Check for React fragments
    this.FRAGMENT_PATTERNS.forEach((pattern) => {
      if (pattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "React Fragment Detected",
          description: `React fragment syntax found in field "${fieldName}"`,
          pattern: pattern.toString(),
          value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
        })
      }
    })

    // Check for JavaScript code
    this.JAVASCRIPT_PATTERNS.forEach((pattern) => {
      if (pattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "JavaScript Code Detected",
          description: `Potentially dangerous JavaScript code found in field "${fieldName}"`,
          pattern: pattern.toString(),
          value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
        })
      }
    })

    // Check for SQL injection attempts
    this.SQL_INJECTION_PATTERNS.forEach((pattern) => {
      if (pattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "SQL Injection Attempt",
          description: `Potential SQL injection pattern found in field "${fieldName}"`,
          pattern: pattern.toString(),
          value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
        })
      }
    })

    // Check for XSS attempts
    this.XSS_PATTERNS.forEach((pattern) => {
      if (pattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "XSS Attempt Detected",
          description: `Potential XSS attack pattern found in field "${fieldName}"`,
          pattern: pattern.toString(),
          value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
        })
      }
    })

    // Check for banned characters
    this.BANNED_CHARS_PATTERNS.forEach((pattern) => {
      if (pattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "Banned Characters Detected",
          description: `Field "${fieldName}" contains banned characters or control sequences`,
          pattern: pattern.toString(),
          value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
        })
      }
    })

    // Check for suspicious characters
    const suspiciousChars = /[<>{}[\]\\/\x00-\x1f\x7f-\x9f]/g
    if (suspiciousChars.test(stringValue)) {
      results.push({
        type: "warning",
        field: fieldName,
        issue: "Suspicious Characters",
        description: `Field "${fieldName}" contains potentially suspicious characters`,
        value: stringValue.substring(0, 100) + (stringValue.length > 100 ? "..." : ""),
      })
    }

    // Field-specific validation
    if (fieldType === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(stringValue)) {
        results.push({
          type: "error",
          field: fieldName,
          issue: "Invalid Email Format",
          description: `Field "${fieldName}" does not contain a valid email address`,
          value: stringValue,
        })
      }
    }

    // Check for excessively long values
    if (stringValue.length > 10000) {
      results.push({
        type: "error",
        field: fieldName,
        issue: "Value Too Long",
        description: `Field "${fieldName}" exceeds maximum allowed length (10000 characters)`,
        value: stringValue.substring(0, 100) + "...",
      })
    }

    return results
  },

  // Validate entire form submission
  validateSubmission: function (submissionData) {
    const allResults = []
    let totalFields = 0
    let validFields = 0

    // Recursively validate nested objects
    const validateObject = (obj, prefix = "") => {
      Object.keys(obj).forEach((key) => {
        if (key === "submit") return // Skip submit buttons

        const fullKey = prefix ? `${prefix}.${key}` : key
        const value = obj[key]

        totalFields++

        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
          validateObject(value, fullKey)
        } else {
          const fieldResults = this.validateField(fullKey, value)
          allResults.push(...fieldResults)

          if (fieldResults.length === 0) {
            validFields++
          }
        }
      })
    }

    validateObject(submissionData)

    // Add summary
    const summary = {
      type: "success",
      field: "VALIDATION_SUMMARY",
      issue: "Validation Complete",
      description: `Validation completed. ${validFields}/${totalFields} fields passed validation. ${allResults.filter((r) => r.type === "error").length} errors, ${allResults.filter((r) => r.type === "warning").length} warnings found.`,
      totalFields,
      validFields,
      errors: allResults.filter((r) => r.type === "error").length,
      warnings: allResults.filter((r) => r.type === "warning").length,
    }

    return {
      isValid: allResults.filter((r) => r.type === "error").length === 0,
      results: [summary, ...allResults],
      summary,
    }
  },
}

// Function to switch modes
function switchMode(mode) {
  currentMode = mode

  // Update mode cards
  $(".mode-card").removeClass("active")
  if (mode === "event") {
    $("#eventModeCard").addClass("active")
    $("#eventSection").show()
    $("#templateSection").hide()
    $("#formConfigSection").hide()
  } else {
    $("#customModeCard").addClass("active")
    $("#eventSection").hide()
    $("#templateSection").show()
    $("#formConfigSection").show()
  }

  // Clear previous selections
  selectedEvents = []
  $("#eventMultiSelect").val([])
  $("#eventDetails").addClass("d-none")
  $("#selectedEventsContainer").addClass("d-none")
  hideValidationMessage()
  $("#formContainer").addClass("d-none")
  $("#submissionContainer").addClass("d-none")
  $("#jsonPreviewContainer").addClass("d-none")
}

// Function to populate event selector
function populateEventSelector() {
  const eventSelect = $("#eventMultiSelect")
  eventSelect.empty()

  EVENTS.forEach((event) => {
    eventSelect.append(`<option value="${event.id}">${event.name}</option>`)
  })
}

// Function to display selected events
function displaySelectedEvents() {
  const container = $("#selectedEventsContainer")
  const eventsList = $("#selectedEventsList")
  eventsList.empty()

  if (selectedEvents.length === 0) {
    container.addClass("d-none")
    return
  }

  selectedEvents.forEach((event) => {
    const eventCard = `
      <div class="event-card mb-3" data-event-id="${event.id}">
        <div class="event-header">
          <h5 class="mb-1">${event.name}</h5>
          <small>${event.description}</small>
        </div>
        <div class="event-body">
          <div class="row mb-2">
            <div class="col-md-4">
              <strong>Template ID:</strong> ${event.formTemplateId}
            </div>
            <div class="col-md-4">
              <strong>Collect for All:</strong> ${event.collectForAll ? "Yes" : "No"}
            </div>
            <div class="col-md-4">
              <strong>Event Type:</strong> ${event.eventType.toUpperCase()}
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <label for="paxCount-${event.id}" class="form-label">Number of Passengers:</label>
              <input type="number" class="form-control event-pax-count" id="paxCount-${event.id}" 
                     data-event-id="${event.id}" min="1" max="10" value="${event.paxCount || 1}">
            </div>
            <div class="col-md-6 text-end">
              <button class="btn btn-sm btn-danger remove-event" data-event-id="${event.id}">
                <i class="fas fa-trash"></i> Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    `
    eventsList.append(eventCard)
  })

  container.removeClass("d-none")

  // Add event listeners for pax count changes
  $(".event-pax-count").on("change", function () {
    const eventId = $(this).data("event-id")
    const paxCount = Number.parseInt($(this).val()) || 1

    // Update the paxCount in the selectedEvents array
    const eventIndex = selectedEvents.findIndex((e) => e.id === eventId)
    if (eventIndex !== -1) {
      selectedEvents[eventIndex].paxCount = paxCount
    }
  })

  // Add event listeners for remove buttons
  $(".remove-event").on("click", function () {
    const eventId = $(this).data("event-id")
    removeSelectedEvent(eventId)
  })
}

// Function to add a selected event
function addSelectedEvent(eventId) {
  // Check if event is already selected
  if (selectedEvents.some((e) => e.id === eventId)) {
    return
  }

  const event = EVENTS.find((e) => e.id === eventId)
  if (event) {
    // Clone the event and add paxCount property
    const eventWithPax = { ...event, paxCount: event.collectForAll ? 2 : 1 }
    selectedEvents.push(eventWithPax)
    displaySelectedEvents()
  }
}

// Function to remove a selected event
function removeSelectedEvent(eventId) {
  selectedEvents = selectedEvents.filter((e) => e.id !== eventId)
  displaySelectedEvents()

  // Update the multi-select to reflect the change
  const currentValues = $("#eventMultiSelect").val() || []
  const newValues = currentValues.filter((id) => id !== eventId)
  $("#eventMultiSelect").val(newValues)
}

// Function to validate Form.io JSON template
function validateFormioTemplate(jsonString) {
  try {
    const parsed = JSON.parse(jsonString)

    // Basic validation for Form.io format
    if (!parsed.components || !Array.isArray(parsed.components)) {
      return { valid: false, error: "Template must have a 'components' array" }
    }

    if (parsed.components.length === 0) {
      return { valid: false, error: "Template must have at least one component" }
    }

    // Validate each component has required fields
    for (let i = 0; i < parsed.components.length; i++) {
      const component = parsed.components[i]
      if (!component.key || !component.type || !component.label) {
        return {
          valid: false,
          error: `Component ${i + 1} missing required fields (key, type, label)`,
        }
      }
    }

    return { valid: true, template: parsed }
  } catch (error) {
    return { valid: false, error: `Invalid JSON: ${error.message}` }
  }
}

// Function to update template status
function updateTemplateStatus(isValid, message) {
  const statusDiv = $("#templateStatus")
  statusDiv.removeClass("d-none template-valid template-invalid")

  if (isValid) {
    statusDiv.addClass("template-valid").html(`<i class="fas fa-check-circle"></i> ${message}`)
  } else {
    statusDiv.addClass("template-invalid").html(`<i class="fas fa-exclamation-triangle"></i> ${message}`)
  }
}

// Function to load template from textarea
function loadTemplateFromTextarea() {
  const templateText = $("#templateJson").val().trim()

  if (!templateText) {
    updateTemplateStatus(false, "Please select an event or paste a Form.io JSON template")
    return false
  }

  const validation = validateFormioTemplate(templateText)

  if (validation.valid) {
    CURRENT_TEMPLATE = validation.template
    updateTemplateStatus(true, "Form.io template loaded successfully!")
    return true
  } else {
    updateTemplateStatus(false, validation.error)
    return false
  }
}

// Function to show validation message
function showValidationMessage(type, message) {
  const validationDiv = $("#validationMessage")
  validationDiv.removeClass("validation-error validation-success d-none")

  if (type === "error") {
    validationDiv.addClass("validation-error").html(`<i class="fas fa-exclamation-triangle"></i> ${message}`)
  } else {
    validationDiv.addClass("validation-success").html(`<i class="fas fa-check-circle"></i> ${message}`)
  }
}

// Function to hide validation message
function hideValidationMessage() {
  $("#validationMessage").addClass("d-none")
}

// Function to convert Form.io component to internal format
function convertFormioToInternalFormat(formioComponent, eventId = null, passengerIndex = null) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const prefix = eventId ? `event${eventId.replace("event_", "")}_` : ""
  const field = {
    label: formioComponent.label,
    name: passengerIndex
      ? `${prefix}pax${passengerIndex}${capitalizeFirstLetter(formioComponent.key)}`
      : `${prefix}${formioComponent.key}`,
    type: mapFormioTypeToHtmlType(formioComponent.type),
    class: `field-${formioComponent.key}${passengerIndex ? ` pax-${passengerIndex}` : ""}${eventId ? ` event-${eventId}` : ""}`,
    validation: {},
  }

  // Handle validation
  if (formioComponent.validate) {
    field.validation = { ...formioComponent.validate }
  }

  // Handle select options
  if (formioComponent.type === "select" && formioComponent.data && formioComponent.data.values) {
    field.options = formioComponent.data.values.map((item) => ({
      value: item.value,
      text: item.label,
    }))
  }

  // Handle checkbox
  if (formioComponent.type === "checkbox") {
    field.type = "checkbox"
  }

  // Handle textarea
  if (formioComponent.type === "textarea") {
    field.type = "textarea"
  }

  return field
}

// Function to map Form.io types to HTML types
function mapFormioTypeToHtmlType(formioType) {
  const typeMap = {
    textfield: "text",
    number: "number",
    email: "email",
    password: "password",
    textarea: "textarea",
    select: "select",
    checkbox: "checkbox",
    radio: "radio",
  }

  return typeMap[formioType] || "text"
}

// Function to generate Form.io schema for multiple events with multiple passengers
function generateFormioSchema() {
  const schema = {
    display: "form",
    components: [],
  }

  if (currentMode === "event" && selectedEvents.length > 0) {
    // Generate schema for multiple events
    selectedEvents.forEach((event) => {
      const eventComponents = []
      const paxCount = event.paxCount || 1
      const collectForAll = event.collectForAll

      // Filter out submit buttons initially
      const inputComponents = event.template.components.filter((comp) => comp.type !== "button")

      if (collectForAll && paxCount > 1) {
        // Create fieldsets for each passenger in this event
        for (let i = 1; i <= paxCount; i++) {
          const fieldset = {
            label: `${event.name} - Passenger ${i}`,
            key: `event_${event.id}_passenger${i}`,
            type: "fieldset",
            input: false,
            tableView: false,
            legend: `${event.name} - Passenger ${i} Information`,
            components: inputComponents.map((component) => ({
              ...component,
              key: `event_${event.id}_pax${i}_${component.key}`,
              label: component.label,
            })),
          }
          eventComponents.push(fieldset)
        }
      } else {
        // Single passenger or non-collectForAll event
        const fieldset = {
          label: event.name,
          key: `event_${event.id}_info`,
          type: "fieldset",
          input: false,
          tableView: false,
          legend: `${event.name} - Information`,
          components: [...inputComponents],
        }
        eventComponents.push(fieldset)
      }

      // Add event components to schema
      schema.components.push(...eventComponents)
    })
  } else {
    // Custom mode - use current template
    const paxCount = Number.parseInt($("#paxCount").val()) || 1
    const collectForAll = $("#collectForAll").prop("checked")

    // Filter out submit buttons initially
    const inputComponents = CURRENT_TEMPLATE.components.filter((comp) => comp.type !== "button")

    if (collectForAll && paxCount > 1) {
      // Create clear fieldsets for each passenger
      for (let i = 1; i <= paxCount; i++) {
        const fieldset = {
          label: `Passenger ${i}`,
          key: `passenger${i}`,
          type: "fieldset",
          input: false,
          tableView: false,
          legend: `Passenger ${i} Information`,
          components: inputComponents.map((component) => ({
            ...component,
            key: `pax${i}_${component.key}`,
            label: component.label,
          })),
        }
        schema.components.push(fieldset)
      }
    } else {
      // Single passenger - wrap in fieldset for consistency
      const fieldset = {
        label: "Information",
        key: "passengerInfo",
        type: "fieldset",
        input: false,
        tableView: false,
        legend: "Information",
        components: [...inputComponents],
      }
      schema.components.push(fieldset)
    }
  }

  // Add submit button at the end
  schema.components.push({
    label: "Submit",
    showValidations: false,
    tableView: false,
    key: "submit",
    type: "button",
    input: true,
    disableOnInvalid: true,
  })

  return schema
}

// Function to display Form.io JSON schema
function displayFormioJsonSchema() {
  const schema = generateFormioSchema()
  $("#jsonPreview").text(JSON.stringify(schema, null, 2))
  $("#jsonPreviewContainer").removeClass("d-none")
}

// Function to generate Form.io form
function generateFormioForm() {
  let schema

  if (currentMode === "custom") {
    // For custom mode, load template from textarea first
    if (!loadTemplateFromTextarea()) {
      alert("Please fix the template errors before generating the form.")
      return
    }
    schema = generateFormioSchema()
  } else if (currentMode === "event") {
    // For event mode, check if events are selected
    if (selectedEvents.length === 0) {
      alert("Please select at least one event first.")
      return
    }
    schema = generateFormioSchema()
  } else {
    alert("Invalid mode selected.")
    return
  }

  // Clear previous form and messages
  $("#formio").empty()
  hideValidationMessage()

  // Destroy previous Form.io instance
  if (formioInstance) {
    formioInstance.destroy()
    formioInstance = null
  }

  // Create new Form.io form
  const Formio = window.Formio
  Formio.createForm(document.getElementById("formio"), schema, {
    noAlerts: true,
    readOnly: false,
    viewAsHtml: false,
  })
    .then((form) => {
      formioInstance = form

      // Handle form submission with validation
      form.on("submit", (submission) => {
        console.log("Form submit event triggered")

        // Use Form.io's built-in validation instead of checkValidity
        if (!form.isValid(submission.data, true)) {
          console.log("Form validation failed")
          showValidationMessage("error", "Please fix all validation errors before submitting the form.")

          // Reset submit button state
          const submitBtn = form.getComponent("submit")
          if (submitBtn) {
            submitBtn.loading = false
            submitBtn.disabled = false
            submitBtn.redraw()
          }
          return
        }

        // If we get here, form is valid
        console.log("Form is valid, processing submission:", submission)
        handleFormSubmission(submission)

        // Reset submit button state
        setTimeout(() => {
          const submitBtn = form.getComponent("submit")
          if (submitBtn) {
            submitBtn.loading = false
            submitBtn.disabled = false
            submitBtn.redraw()
          }
        }, 1000)
      })

      // Handle form change events for real-time validation
      form.on("change", (changed) => {
        console.log("Form changed:", changed)
        hideValidationMessage()
      })

      // Handle form errors
      form.on("error", (errors) => {
        console.log("Form errors:", errors)
        showValidationMessage("error", "Please correct the errors in the form.")
      })

      // Show the form container
      $("#formContainer").removeClass("d-none")

      let successMessage
      if (currentMode === "event") {
        const eventNames = selectedEvents.map((e) => e.name).join(", ")
        successMessage = `Form for events (${eventNames}) generated successfully! Please fill out all required fields.`
      } else {
        successMessage = "Form generated successfully! Please fill out all required fields."
      }

      showValidationMessage("success", successMessage)
    })
    .catch((error) => {
      console.error("Error creating form:", error)
      showValidationMessage("error", "Error creating Form.io form: " + error.message)
    })
}

// Function to display server validation results
function displayServerValidationResults(validationResult) {
  const resultsContainer = $("#validationResultsList")
  resultsContainer.empty()

  if (validationResult.results.length === 0) {
    resultsContainer.html('<div class="validation-item success">No validation issues found.</div>')
    return
  }

  validationResult.results.forEach((result) => {
    const resultDiv = $(`<div class="validation-item ${result.type}"></div>`)

    let iconClass = "fas fa-info-circle"
    if (result.type === "error") iconClass = "fas fa-exclamation-triangle"
    if (result.type === "warning") iconClass = "fas fa-exclamation-circle"
    if (result.type === "success") iconClass = "fas fa-check-circle"

    let html = `
      <div class="d-flex align-items-start">
        <i class="${iconClass} me-2 mt-1"></i>
        <div class="flex-grow-1">
          <strong>${result.issue}</strong>
          <br>
          <small>${result.description}</small>
    `

    if (result.field && result.field !== "VALIDATION_SUMMARY") {
      html += `<br><em>Field: ${result.field}</em>`
    }

    if (result.value && result.field !== "VALIDATION_SUMMARY") {
      html += `<br><code class="small">${result.value}</code>`
    }

    html += `
        </div>
      </div>
    `

    resultDiv.html(html)
    resultsContainer.append(resultDiv)
  })

  // Show validation results container
  $("#serverValidationResults").removeClass("d-none")
}

// Function to handle form submission
function handleFormSubmission(submission) {
  console.log("Processing form submission:", submission)

  // Perform server-side validation
  const validationResult = ServerValidation.validateSubmission(submission.data)

  // Create submission data in Form.io format
  const submissionData = {
    mode: currentMode,
    events:
      currentMode === "event"
        ? selectedEvents.map((e) => ({
            id: e.id,
            name: e.name,
            formTemplateId: e.formTemplateId,
            paxCount: e.paxCount || 1,
          }))
        : null,
    data: submission.data,
    validation: {
      isValid: validationResult.isValid,
      summary: validationResult.summary,
      issues: validationResult.results.filter((r) => r.field !== "VALIDATION_SUMMARY"),
    },
    metadata: {
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      offset: new Date().getTimezoneOffset(),
      origin: window.location.origin,
      referrer: document.referrer,
      browserName: navigator.appName,
      userAgent: navigator.userAgent,
      pathName: window.location.pathname,
      onLine: navigator.onLine,
      submittedAt: new Date().toISOString(),
    },
    state: validationResult.isValid ? "submitted" : "validation_failed",
    _vnote: "",
  }

  // Display submission data
  $("#submissionData").text(JSON.stringify(submissionData, null, 2))

  // Display server validation results
  displayServerValidationResults(validationResult)

  // Generate MD5 hashes only if validation passed
  if (validationResult.isValid) {
    generateHashesFromSubmission(submission.data)
    showValidationMessage("success", "Form submitted successfully! All validation checks passed.")
  } else {
    showValidationMessage(
      "error",
      `Form submission failed validation. ${validationResult.summary.errors} errors found.`,
    )
    $("#hashOutput").html('<div class="alert alert-warning">MD5 hashes not generated due to validation errors.</div>')
  }

  // Show submission container
  $("#submissionContainer").removeClass("d-none")

  // Scroll to submission data
  setTimeout(() => {
    $("#submissionContainer")[0].scrollIntoView({ behavior: "smooth" })
  }, 500)
}

// Function to generate MD5 hashes from submission data
function generateHashesFromSubmission(data) {
  const hashOutput = $("#hashOutput")

  let hashesHTML = '<div class="table-responsive"><table class="table table-striped table-bordered">'
  hashesHTML += "<thead><tr><th>Field Key</th><th>Field Value</th><th>MD5 Hash (salt + key)</th></tr></thead><tbody>"

  // Generate hashes for each field
  Object.keys(data).forEach((key) => {
    if (key !== "submit" && data[key] !== undefined && data[key] !== null && data[key] !== "") {
      const hash = CryptoJS.MD5(SALT + key).toString()
      const value = typeof data[key] === "object" ? JSON.stringify(data[key]) : data[key]

      hashesHTML += `
        <tr>
          <td><strong>${key}</strong></td>
          <td>${value}</td>
          <td><code>${hash}</code></td>
        </tr>
      `
    }
  })

  hashesHTML += "</tbody></table></div>"
  hashOutput.html(hashesHTML)

  console.log("MD5 hashes generated successfully")
}

// Function to generate JSON schema based on inputs
function generateJsonSchema() {
  const schema = {
    formTitle: "Dynamic Travel Booking Form",
    mode: currentMode,
    events:
      currentMode === "event"
        ? selectedEvents.map((e) => ({
            id: e.id,
            name: e.name,
            formTemplateId: e.formTemplateId,
            collectForAll: e.collectForAll,
            eventType: e.eventType,
            paxCount: e.paxCount || 1,
          }))
        : null,
    template: currentMode === "custom" ? CURRENT_TEMPLATE : null,
    sections: [],
  }

  if (currentMode === "event" && selectedEvents.length > 0) {
    // Generate sections for each event
    selectedEvents.forEach((event) => {
      const eventSection = {
        eventId: event.id,
        title: event.name,
        fields: [],
      }

      const paxCount = event.paxCount || 1
      const collectForAll = event.collectForAll

      // Filter out non-input components
      const inputComponents = event.template.components.filter((comp) => comp.input && comp.type !== "button")

      if (collectForAll && paxCount > 1) {
        // Generate fields for each passenger
        for (let i = 1; i <= paxCount; i++) {
          inputComponents.forEach((component) => {
            const field = convertFormioToInternalFormat(component, event.id, i)
            field.label = `Passenger ${i} ${component.label}`
            eventSection.fields.push(field)
          })
        }
      } else {
        // Generate fields once
        eventSection.fields = inputComponents.map((component) => convertFormioToInternalFormat(component, event.id))
      }

      schema.sections.push(eventSection)
    })
  } else {
    // Custom mode
    const paxCount = Number.parseInt($("#paxCount").val()) || 1
    const collectForAll = $("#collectForAll").prop("checked")

    // Filter out non-input components
    const inputComponents = CURRENT_TEMPLATE.components.filter((comp) => comp.input && comp.type !== "button")

    if (collectForAll && paxCount > 1) {
      // Generate fields for each passenger
      const passengerSection = {
        title: "Passenger Information",
        fields: [],
      }

      for (let i = 1; i <= paxCount; i++) {
        inputComponents.forEach((component) => {
          const field = convertFormioToInternalFormat(component, null, i)
          field.label = `Passenger ${i} ${component.label}`
          passengerSection.fields.push(field)
        })
      }

      schema.sections.push(passengerSection)
    } else {
      // Generate fields once
      schema.sections.push({
        title: "Passenger Information",
        fields: inputComponents.map((component) => convertFormioToInternalFormat(component)),
      })
    }
  }

  return schema
}

// Function to display JSON schema
function displayJsonSchema() {
  const schema = generateJsonSchema()
  $("#jsonPreview").text(JSON.stringify(schema, null, 2))
  $("#jsonPreviewContainer").removeClass("d-none")
}

// Helper function to capitalize first letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// Event listeners
$(document).ready(() => {
  console.log("Document ready - initializing Multi-Event Form.io generator")

  // Load current template into textarea on page load
  $("#templateJson").val(JSON.stringify(CURRENT_TEMPLATE, null, 2))
  updateTemplateStatus(true, "Default Form.io template loaded")

  // Populate event selector
  populateEventSelector()

  // Mode switching
  $("#eventModeCard").on("click", () => {
    switchMode("event")
  })

  $("#customModeCard").on("click", () => {
    switchMode("custom")
  })

  // Event selection handler for multi-select
  $("#eventMultiSelect").on("change", function () {
    const selectedIds = $(this).val() || []

    // Clear previous selections
    selectedEvents = []

    // Add each selected event
    selectedIds.forEach((eventId) => {
      const event = EVENTS.find((e) => e.id === eventId)
      if (event) {
        // Clone the event and add paxCount property
        const eventWithPax = { ...event, paxCount: event.collectForAll ? 2 : 1 }
        selectedEvents.push(eventWithPax)
      }
    })

    // Display selected events
    displaySelectedEvents()
  })

  // Generate event form button
  $("#generateEventForm").on("click", () => {
    console.log("Generate event form clicked")
    if (selectedEvents.length === 0) {
      alert("Please select at least one event first.")
      return
    }
    generateFormioForm()
  })

  // Template management buttons
  $("#validateTemplate").on("click", () => {
    console.log("Validate template clicked")
    loadTemplateFromTextarea()
  })

  $("#loadSampleTemplate").on("click", () => {
    console.log("Load sample template clicked")
    $("#templateJson").val(JSON.stringify(SAMPLE_TEMPLATES.basic, null, 2))
    CURRENT_TEMPLATE = SAMPLE_TEMPLATES.basic
    updateTemplateStatus(true, "Sample Form.io template loaded!")
    selectedEvents = [] // Clear selected events when loading sample
  })

  $("#loadPassengerTemplate").on("click", () => {
    console.log("Load passenger template clicked")
    $("#templateJson").val(JSON.stringify(SAMPLE_TEMPLATES.passenger, null, 2))
    CURRENT_TEMPLATE = SAMPLE_TEMPLATES.passenger
    updateTemplateStatus(true, "Passenger Form.io template loaded!")
    selectedEvents = [] // Clear selected events when loading sample
  })

  $("#clearTemplate").on("click", () => {
    console.log("Clear template clicked")
    $("#templateJson").val("")
    $("#templateStatus").addClass("d-none")
    selectedEvents = []
    $("#eventMultiSelect").val([])
    $("#selectedEventsContainer").addClass("d-none")
  })

  // Form generation buttons
  $("#generateJson").on("click", () => {
    console.log("Generate JSON clicked")
    if (currentMode === "custom") {
      if (loadTemplateFromTextarea()) {
        displayFormioJsonSchema()
      }
    } else if (currentMode === "event" && selectedEvents.length > 0) {
      displayFormioJsonSchema()
    } else {
      alert("Please select at least one event or load a template first.")
    }
  })

  $("#generateForm").on("click", () => {
    console.log("Generate form clicked")
    generateFormioForm()
  })

  // Auto-validate template on textarea change (with debounce)
  let templateValidationTimeout
  $("#templateJson").on("input", () => {
    clearTimeout(templateValidationTimeout)
    templateValidationTimeout = setTimeout(() => {
      const templateText = $("#templateJson").val().trim()
      if (templateText) {
        const validation = validateFormioTemplate(templateText)
        updateTemplateStatus(validation.valid, validation.valid ? "Form.io template is valid" : validation.error)
      } else {
        $("#templateStatus").addClass("d-none")
      }
    }, 1000)
  })

  console.log("All event listeners attached successfully")
})
