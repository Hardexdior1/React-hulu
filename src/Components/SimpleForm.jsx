"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be at least 10 digits")
    .required("Phone number is required"),
});

const SimpleForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);

    // You can add any submission logic here
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto p-4">
          <div className="flex flex-col gap-4">
            {/* Name Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                id="name"
                className="border rounded-md p-2"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                className="border rounded-md p-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col gap-1">
              <label htmlFor="phone">Phone Number</label>
              <Field
                type="text"
                name="phone"
                id="phone"
                className="border rounded-md p-2"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              isButton={true}
              className="mt-4"
              disabled={isSubmitting}>
              {" "}
              {isSubmitting ? "Submitting..." : "Submit"}{" "}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SimpleForm;
