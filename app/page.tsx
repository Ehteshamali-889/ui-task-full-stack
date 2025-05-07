"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";

export default function Home() {
  const trainingOptions = [
    "Strength Training",
    "Hypertrophy / Muscle Building",
    "HIIT / Conditioning",
    "Cardio / Endurance",
    "Bodyweight / Calisthenics",
    "Mobility / Yoga / Stretching",
    "Power / Explosiveness",
    "Athletic Performance",
    "Rehabilitation / Injury Prevention",
    "Core Stability",
    "Skill-based",
  ];

  const primaryFocusOptions = [
    "Cardio",
    "Full Body",
    "Upper Body",
    "Chest",
    "Shoulders",
    "Back",
    "Core/Abs",
    "Biceps",
    "Triceps",
    "Lower Body",
    "Quads",
  ];

  const workoutOptions = [
    "5-15 Mins",
    "15-30 Mins",
    "30-45 Mins",
    "45-60 Mins",
    "60-90 Mins",
    "90-120 Mins",
    "120+",
    "Other",
  ];

  const locationOptions = ["home", "gym", "outdoor"];

  const equipmentListOptions = [
    "full gym",
    "dumbbells and bands",
    "bodyweight only",
    "barbell and rack",
    "machine only",
  ];

  const intensifiersUsedOptions = [
    "Regularset",
    "Superset",
    "Trisets",
    "Quadsets",
  ];

  const [formData, setFormData] = useState({
    NumberOfWeeks: "",
    ProgramName: "",
    TrainingModality: "",
    DifficultyLevel: "",
    PrimaryFocus: "",
    SecondaryFocus: "",
    DaysPerWeek: "",
    SessionDuration: "",
    ExercisesPerDay: "",
    SetsPerDay: "",
    Location: "",
    EquipmentList: "",
    IntensifiersUsed: "",
    WantProgression: "",
  });

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleMultiSelectChange = (key: keyof typeof formData, values: string[]) => {
    setFormData((prev) => ({ ...prev, [key]: values }));
  };
  

  const handleSubmit = () => {
    const missingFields = Object.entries(formData).filter(
      ([_, value]) => value === ""
    );
  
    if (missingFields.length > 0) {
      toast.error("Please fill in all fields before generating the program.");
      return;
    }
  
    console.log("Generate Program Clicked", formData);
    toast.success("Program ready to be generated!");
  };  

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <Toaster position="top-center" />
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Fitness Program Prompt Builder
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number Of Weeks
            </label>
            <select
              value={formData.NumberOfWeeks}
              onChange={(e) => handleChange("NumberOfWeeks", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Number Of Weeks</option>
              {[1, 2, 3, 4, 5, 6].map((week) => (
                <option key={week} value={week}>
                  {week}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Program Name
            </label>
            <input
              value={formData.ProgramName}
              onChange={(e) => handleChange("ProgramName", e.target.value)}
              placeholder="Enter Program Name"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Training Modality
            </label>
            <select
              value={formData.TrainingModality}
              onChange={(e) => handleChange("TrainingModality", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Training Modality</option>
              {trainingOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Difficulty Level
            </label>
            <select
              value={formData.DifficultyLevel}
              onChange={(e) => handleChange("DifficultyLevel", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Difficulty Level</option>
              {["Beginner", "Intermediate", "Advance"].map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Primary Focus
            </label>
            <select
              value={formData.PrimaryFocus}
              onChange={(e) => handleChange("PrimaryFocus", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Primary Focus</option>
              {primaryFocusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Secondary Focus
            </label>
            <select
              value={formData.SecondaryFocus}
              onChange={(e) => handleChange("SecondaryFocus", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Secondary Focus</option>
              {primaryFocusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Days Per Week
            </label>
            <select
              value={formData.DaysPerWeek}
              onChange={(e) => handleChange("DaysPerWeek", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Days Per Week</option>
              {[...Array(7)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              How Long Per Workout?
            </label>
            <select
              value={formData.SessionDuration}
              onChange={(e) => handleChange("SessionDuration", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Time</option>
              {workoutOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Exercises Per Day
            </label>
            <select
              value={formData.ExercisesPerDay}
              onChange={(e) => handleChange("ExercisesPerDay", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Exercises Per Day</option>
              {[...Array(20)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sets Per Day
            </label>
            <select
              value={formData.SetsPerDay}
              onChange={(e) => handleChange("SetsPerDay", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Sets Per Day</option>
              {[1, 2, 3].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <select
              value={formData.Location}
              onChange={(e) => handleChange("Location", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Location</option>
              {locationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Equipment List
            </label>
            <select
              value={formData.EquipmentList}
              onChange={(e) => handleChange("EquipmentList", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Equipment List</option>
              {equipmentListOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Intensifiers Used
            </label>
            <select
              value={formData.IntensifiersUsed}
              onChange={(e) => handleChange("IntensifiersUsed", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Intensifiers Used</option>
              {intensifiersUsedOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Want Progression
            </label>
            <select
              value={formData.WantProgression}
              onChange={(e) => handleChange("WantProgression", e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-[#DADADA] py-2 px-3 text-sm shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select Want Progression</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="mt-10 p-6 bg-purple-50 rounded-md border border-purple-300">
          <h2 className="font-semibold text-purple-800 mb-2">Prompt Text :</h2>
          <p className="text-sm text-gray-700 whitespace-pre-line text-justify w-full">
  {`Create a ${formData.NumberOfWeeks || '{NumberOfWeeks}'}-week fitness program called "${formData.ProgramName || '{ProgramName}'}". This program should follow the ${formData.TrainingModality || '{TrainingModality}'} training style and is designed for someone at the ${formData.DifficultyLevel || '{DifficultyLevel}'} level.

The primary focus of this program is ${formData.PrimaryFocus || '{PrimaryFocus}'}, with a secondary focus on ${formData.SecondaryFocus || '{SecondaryFocus}'}. The user will train ${formData.DaysPerWeek || '{DaysPerWeek}'} days per week, with each session lasting around ${formData.SessionDuration || '{SessionDuration}'} minutes.

Each workout should include exactly ${formData.ExercisesPerDay || '{ExercisesPerDay}'} exercises and a total of ${formData.SetsPerDay || '{SetsPerDay}'} sets per day.

The workouts will be performed at ${formData.Location || '{Location}'}, and the available equipment includes: ${formData.EquipmentList || '{EquipmentList}'}.

Use the following training intensifiers where applicable: ${formData.IntensifiersUsed || '{IntensifiersUsed}'}.

Do you want the program to progressively get more challenging each week? ${formData.WantProgression || '{WantProgression}'}.

Please structure the program clearly by week and day. Label each circuit using letters (A, B, C, etc.), and label exercises within each circuit using A1, A2, B1, etc.`}
</p>

        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Generate Program
          </button>
        </div>
      </div>
    </div>
  );
}
