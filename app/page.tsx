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

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Fitness Program Prompt Builder
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number Of Weeks
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Number Of Weeks</option>
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
              type="text"
              placeholder="Enter Program Name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Training Modality
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Training Modality</option>
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
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Difficulty Level</option>
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
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Primary Focus</option>
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
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Secondary Focus</option>
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
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
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
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Time</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Exercises Per Day
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Exercises Per Day</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sets Per Day
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Sets Per Day</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select Location</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Equipment List
            </label>
            <input
              type="text"
              defaultValue="Dumbbells and bands"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Intensifiers Used
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Select IntensifiersUsed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Want Progression
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500">
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div className="mt-10 p-6 bg-purple-50 rounded-md border border-purple-300">
          <h2 className="font-semibold text-purple-800 mb-2">Prompt Text :</h2>
          <p className="text-sm text-gray-700 whitespace-pre-line">
            {`Create a {NumberOfWeeks}-week fitness program called "{ProgramName}". This program should follow the {TrainingModality} training style and is designed for someone at the {DifficultyLevel} level.

The primary focus of this program is {PrimaryFocus}, with a secondary focus on {SecondaryFocus}. The user will train {DaysPerWeek} days per week, with each session lasting around {SessionDuration} minutes.

Each workout should include exactly {ExercisesPerDay} exercises and a total of {SetsPerDay} sets per day.

The workouts will be performed at {Location}, and the available equipment includes: {EquipmentList}.

Use the following training intensifiers where applicable: {IntensifiersUsed}.

Do you want the program to progressively get more challenging each week? {WantProgression}.

Please structure the program clearly by week and day. Label each circuit using letters (A, B, C, etc.), and label exercises within each circuit using A1, A2, B1, etc.`}
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Generate Program
          </button>
        </div>
      </div>
    </div>
  );
}
