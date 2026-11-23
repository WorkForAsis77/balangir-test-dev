"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Headphones,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
  Send,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

interface EnquiryFormState {
  name: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
}

type EnquiryField = keyof EnquiryFormState;
type FormErrors = Partial<Record<EnquiryField, string>>;

const INITIAL_FORM: EnquiryFormState = {
  name: "",
  mobile: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactSection() {
  const { t } = useApp();
  const [formData, setFormData] = useState<EnquiryFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const validate = (data: EnquiryFormState): FormErrors => {
    const newErrors: FormErrors = {};
    const e = t.contact.form.errors;

    if (!data.name.trim()) {
      newErrors.name = e.nameRequired;
    } else if (data.name.trim().length < 2) {
      newErrors.name = e.nameMin;
    }

    const digits = data.mobile.replace(/\D/g, "");
    if (!digits) {
      newErrors.mobile = e.mobileRequired;
    } else if (!/^[6-9]\d{9}$/.test(digits)) {
      newErrors.mobile = e.mobileInvalid;
    }

    if (!data.email.trim()) {
      newErrors.email = e.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
      newErrors.email = e.emailInvalid;
    }

    if (!data.subject.trim()) {
      newErrors.subject = e.subjectRequired;
    }

    if (!data.message.trim()) {
      newErrors.message = e.messageRequired;
    } else if (data.message.trim().length < 10) {
      newErrors.message = e.messageMin;
    }

    return newErrors;
  };

  const handleChange = (field: EnquiryField, value: string) => {
    const sanitized =
      field === "mobile" ? value.replace(/\D/g, "").slice(0, 10) : value;
    setFormData((prev) => ({ ...prev, [field]: sanitized }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const fieldEl = document.getElementById(`enquiry-${firstErrorField}`);
      fieldEl?.focus();
      return;
    }

    const randomCode = Math.floor(100000 + Math.random() * 900000);
    setSubmittedRef(`BLG-MIHMS-${randomCode}`);
    setErrors({});
    setFormData(INITIAL_FORM);
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-14 sm:py-20 bg-surface-muted"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-topbar mb-2">
            {t.contact.sectionTag}
          </span>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-primary section-heading-underline-center"
          >
            {t.contact.title}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Top Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-md shadow-slate-900/5 border-t-4 border-t-brand-accent flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-brand-primary mb-2">
              {t.contact.cards.addressTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t.contact.cards.addressValue}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md shadow-slate-900/5 border-t-4 border-t-brand-accent flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-brand-primary mb-2">
              {t.contact.cards.phoneTitle}
            </h3>
            <a
              href="tel:+916652232245"
              className="text-sm sm:text-base font-semibold text-brand-topbar hover:text-brand-primary transition"
            >
              {t.contact.cards.phoneValue}
            </a>
            <p className="text-xs text-slate-500 mt-1.5">
              {t.contact.cards.phoneHours}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md shadow-slate-900/5 border-t-4 border-t-brand-accent flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-brand-accent/10 text-brand-accent flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-brand-primary mb-2">
              {t.contact.cards.emailTitle}
            </h3>
            <a
              href="mailto:cdmo.balangir@odisha.gov.in"
              className="text-sm font-semibold text-brand-topbar hover:text-brand-primary break-all transition"
            >
              {t.contact.cards.emailValue}
            </a>
            <p className="text-xs text-slate-500 mt-1.5">
              {t.contact.cards.emailSub}
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md shadow-slate-900/5 border-t-4 border-t-brand-primary flex flex-col">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center mb-4">
              <Headphones className="w-6 h-6" aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold text-brand-primary mb-2">
              {t.contact.cards.helplineTitle}
            </h3>
            <a
              href="tel:104"
              className="text-base sm:text-lg font-extrabold text-brand-primary hover:text-brand-accent transition"
            >
              {t.contact.cards.helplineValue}
            </a>
            <p className="text-xs text-slate-500 mt-1.5">
              {t.contact.cards.helplineSub}
            </p>
          </div>
        </div>

        {/* Map + Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          <div className="lg:col-span-5 bg-white rounded-2xl shadow-md shadow-slate-900/5 border border-slate-200/80 overflow-hidden flex flex-col">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-primary">
                  {t.contact.mapTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  {t.contact.mapSubtitle}
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=District+Headquarters+Hospital+Balangir+Odisha+767001"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-accent/10 text-brand-topbar hover:bg-brand-accent hover:text-white text-xs font-semibold transition shrink-0"
              >
                <span>{t.contact.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
            <div className="relative flex-1 min-h-[320px] bg-slate-100">
              <iframe
                title={t.contact.mapTitle}
                src="https://maps.google.com/maps?q=Balangir%20Odisha%20767001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[320px] border-0"
              />
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl shadow-md shadow-slate-900/5 border border-slate-200/80 overflow-hidden">
            <div className="bg-gradient-to-r from-brand-primary to-brand-secondary px-6 py-5 text-white">
              <h3 className="text-lg sm:text-xl font-bold">
                {t.contact.form.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/85 mt-1">
                {t.contact.form.subtitle}
              </p>
            </div>

            <div className="p-6">
              {submittedRef ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4"
                >
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-emerald-900">
                    {t.contact.form.success.title}
                  </h4>
                  <p className="text-sm text-emerald-800 max-w-lg mx-auto leading-relaxed">
                    {t.contact.form.success.body}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-emerald-200 text-sm font-semibold text-brand-primary">
                    <span>{t.contact.form.success.referenceLabel}:</span>
                    <span className="font-mono text-brand-topbar">
                      {submittedRef}
                    </span>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmittedRef(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-primary text-white text-sm font-semibold hover:bg-brand-primary-dark transition cursor-pointer"
                    >
                      {t.contact.form.success.newEnquiryBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <p className="text-xs text-slate-500">
                    {t.contact.form.requiredNote}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enquiry-name"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {t.contact.form.nameLabel}{" "}
                        <span className="text-red-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="enquiry-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder={t.contact.form.namePlaceholder}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={
                          errors.name ? "enquiry-name-error" : undefined
                        }
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition ${
                          errors.name
                            ? "border-red-500 bg-red-50/40"
                            : "border-slate-300 focus:border-brand-primary"
                        }`}
                      />
                      {errors.name && (
                        <p
                          id="enquiry-name-error"
                          role="alert"
                          className="mt-1 text-xs font-medium text-red-600"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-mobile"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {t.contact.form.mobileLabel}{" "}
                        <span className="text-red-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="enquiry-mobile"
                        name="mobile"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel"
                        maxLength={10}
                        required
                        value={formData.mobile}
                        onChange={(e) => handleChange("mobile", e.target.value)}
                        placeholder={t.contact.form.mobilePlaceholder}
                        aria-invalid={Boolean(errors.mobile)}
                        aria-describedby={
                          errors.mobile ? "enquiry-mobile-error" : undefined
                        }
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition ${
                          errors.mobile
                            ? "border-red-500 bg-red-50/40"
                            : "border-slate-300 focus:border-brand-primary"
                        }`}
                      />
                      {errors.mobile && (
                        <p
                          id="enquiry-mobile-error"
                          role="alert"
                          className="mt-1 text-xs font-medium text-red-600"
                        >
                          {errors.mobile}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {t.contact.form.emailLabel}{" "}
                        <span className="text-red-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="enquiry-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder={t.contact.form.emailPlaceholder}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "enquiry-email-error" : undefined
                        }
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition ${
                          errors.email
                            ? "border-red-500 bg-red-50/40"
                            : "border-slate-300 focus:border-brand-primary"
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="enquiry-email-error"
                          role="alert"
                          className="mt-1 text-xs font-medium text-red-600"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-subject"
                        className="block text-sm font-semibold text-slate-800 mb-1.5"
                      >
                        {t.contact.form.subjectLabel}{" "}
                        <span className="text-red-600" aria-hidden="true">
                          *
                        </span>
                      </label>
                      <input
                        id="enquiry-subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        placeholder={t.contact.form.subjectPlaceholder}
                        aria-invalid={Boolean(errors.subject)}
                        aria-describedby={
                          errors.subject ? "enquiry-subject-error" : undefined
                        }
                        className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition ${
                          errors.subject
                            ? "border-red-500 bg-red-50/40"
                            : "border-slate-300 focus:border-brand-primary"
                        }`}
                      />
                      {errors.subject && (
                        <p
                          id="enquiry-subject-error"
                          role="alert"
                          className="mt-1 text-xs font-medium text-red-600"
                        >
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-message"
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                    >
                      {t.contact.form.messageLabel}{" "}
                      <span className="text-red-600" aria-hidden="true">
                        *
                      </span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder={t.contact.form.messagePlaceholder}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "enquiry-message-error" : undefined
                      }
                      className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition resize-y ${
                        errors.message
                          ? "border-red-500 bg-red-50/40"
                          : "border-slate-300 focus:border-brand-primary"
                      }`}
                    />
                    {errors.message && (
                      <p
                        id="enquiry-message-error"
                        role="alert"
                        className="mt-1 text-xs font-medium text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-accent to-brand-accent-dark text-white font-semibold text-sm shadow-md shadow-brand-accent/20 hover:brightness-105 transition cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>{t.contact.form.submitBtn}</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-medium text-sm transition cursor-pointer"
                    >
                      <RotateCcw className="w-4 h-4" aria-hidden="true" />
                      <span>{t.contact.form.resetBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 max-w-3xl mx-auto">
          {t.contact.notice}
        </p>
      </div>
    </section>
  );
}
