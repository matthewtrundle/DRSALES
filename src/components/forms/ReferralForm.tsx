'use client';

import { useState } from 'react';

interface ReferralFormData {
  // Referring physician
  physicianName: string;
  practiceName: string;
  physicianPhone: string;
  physicianEmail: string;
  physicianSpecialty: string;
  // Patient basics
  patientName: string;
  patientPhone: string;
  patientDOB: string;
  // Referral details
  referralReason: string;
  urgency: string;
  additionalNotes: string;
}

export default function ReferralForm() {
  const [formData, setFormData] = useState<ReferralFormData>({
    physicianName: '',
    practiceName: '',
    physicianPhone: '',
    physicianEmail: '',
    physicianSpecialty: '',
    patientName: '',
    patientPhone: '',
    patientDOB: '',
    referralReason: '',
    urgency: '',
    additionalNotes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-display font-semibold text-neutral-900 mb-2">
          Referral Received
        </h3>
        <p className="text-neutral-600">
          Thank you for the referral. Our office will contact the patient to schedule an
          appointment and will keep you informed of their care.
        </p>
      </div>
    );
  }

  const inputClasses = "w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none";
  const labelClasses = "block text-sm font-medium text-neutral-700 mb-2";

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Referring Physician Section */}
      <div>
        <h3 className="text-lg font-display font-semibold text-neutral-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Referring Physician
        </h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="physicianName" className={labelClasses}>
                Your Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="physicianName"
                name="physicianName"
                required
                value={formData.physicianName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Dr. Jane Smith"
              />
            </div>
            <div>
              <label htmlFor="practiceName" className={labelClasses}>
                Practice Name
              </label>
              <input
                type="text"
                id="practiceName"
                name="practiceName"
                value={formData.practiceName}
                onChange={handleChange}
                className={inputClasses}
                placeholder="Practice or clinic name"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="physicianPhone" className={labelClasses}>
                Phone <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="physicianPhone"
                name="physicianPhone"
                required
                value={formData.physicianPhone}
                onChange={handleChange}
                className={inputClasses}
                placeholder="(555) 123-4567"
              />
            </div>
            <div>
              <label htmlFor="physicianEmail" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                id="physicianEmail"
                name="physicianEmail"
                value={formData.physicianEmail}
                onChange={handleChange}
                className={inputClasses}
                placeholder="doctor@practice.com"
              />
            </div>
            <div>
              <label htmlFor="physicianSpecialty" className={labelClasses}>
                Specialty
              </label>
              <select
                id="physicianSpecialty"
                name="physicianSpecialty"
                value={formData.physicianSpecialty}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select specialty</option>
                <option value="optometry">Optometry</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="primary-care">Primary Care</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Patient Information */}
      <div>
        <h3 className="text-lg font-display font-semibold text-neutral-800 mb-1 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Patient Information
        </h3>
        <p className="text-xs text-neutral-500 mb-4">Basic contact information only. Do not include medical records or protected health information.</p>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="patientName" className={labelClasses}>
              Patient Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="patientName"
              name="patientName"
              required
              value={formData.patientName}
              onChange={handleChange}
              className={inputClasses}
              placeholder="Patient full name"
            />
          </div>
          <div>
            <label htmlFor="patientPhone" className={labelClasses}>
              Patient Phone
            </label>
            <input
              type="tel"
              id="patientPhone"
              name="patientPhone"
              value={formData.patientPhone}
              onChange={handleChange}
              className={inputClasses}
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="patientDOB" className={labelClasses}>
              Date of Birth
            </label>
            <input
              type="date"
              id="patientDOB"
              name="patientDOB"
              value={formData.patientDOB}
              onChange={handleChange}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* Referral Details */}
      <div>
        <h3 className="text-lg font-display font-semibold text-neutral-800 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Referral Details
        </h3>
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="referralReason" className={labelClasses}>
                Reason for Referral <span className="text-primary">*</span>
              </label>
              <select
                id="referralReason"
                name="referralReason"
                required
                value={formData.referralReason}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select reason</option>
                <option value="fuchs-dystrophy">Fuchs&apos; Endothelial Dystrophy</option>
                <option value="keratoconus">Keratoconus</option>
                <option value="corneal-transplant">Corneal Transplant Evaluation</option>
                <option value="corneal-opacity">Corneal Scarring / Opacity</option>
                <option value="failed-graft">Failed Corneal Graft</option>
                <option value="lasik-prk">LASIK / PRK Evaluation</option>
                <option value="icl">ICL Evaluation</option>
                <option value="complex-cataract">Complex Cataract</option>
                <option value="iris-reconstruction">Iris Reconstruction / Aniridia</option>
                <option value="anterior-segment-trauma">Anterior Segment Trauma</option>
                <option value="pterygium">Pterygium</option>
                <option value="dry-eye-severe">Severe Dry Eye Disease</option>
                <option value="second-opinion">Second Opinion</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="urgency" className={labelClasses}>
                Urgency
              </label>
              <select
                id="urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="">Select urgency</option>
                <option value="routine">Routine</option>
                <option value="soon">Within 2 Weeks</option>
                <option value="urgent">Urgent (Within Days)</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="additionalNotes" className={labelClasses}>
              Clinical Notes / Additional Context
            </label>
            <textarea
              id="additionalNotes"
              name="additionalNotes"
              rows={4}
              value={formData.additionalNotes}
              onChange={handleChange}
              className={`${inputClasses} resize-none`}
              placeholder="Brief clinical summary, relevant history, or specific questions for Dr. Sales..."
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-3.5 bg-primary text-white font-medium rounded hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Submitting Referral...
          </>
        ) : (
          <>
            Submit Referral
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
