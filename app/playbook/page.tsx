"use client";
import Image from "next/image";
import { useState } from "react";
import {
  MoreVertical,
  Copy,
  Shuffle,
  Plus,
  Trash,
  Menu,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(1);
  const exercises = [
    "Hip Bridges",
    "Hip Bridges",
    "Hip Bridges",
    "Hip Bridges",
    "Hip Bridges",
  ];

  const renderExerciseCard = () => (
    <div className="bg-white p-3 shadow-sm space-y-4">
      {" "}
      {/* Adjusted background and removed border */}
      {/* First row: Regular Set, + (Menu), Circuit (Transfer icons) */}
      <div className="flex justify-between items-center">
        <div className="bg-gray-200 text-sm px-2 py-1 rounded font-medium">
          Regular Set
        </div>
        <div className="flex items-center space-x-3">
          <Menu className="w-4 h-4 text-gray-500 cursor-pointer" />
          <div className="flex items-center space-x-1 text-gray-500">
            <Image src="/Replace.png" alt="Replace" width={16} height={16} />
          </div>
        </div>
      </div>
      {/* Second row: A, Bench Press, sets, etc. */}
      <div className="grid grid-cols-8 gap-2 text-sm items-center">
        <div className="col-span-1 font-medium">A</div>
        <div className="col-span-2">Barbell Bench Press</div>
        <div className="col-span-1">3</div>
        <div className="col-span-1">12, 10, 8</div>
        <div className="col-span-1">95, 115, 135</div>
        <div className="col-span-1">1-3-1 tempo</div>
        <div className="col-span-1 flex justify-between items-center">
          <Trash className="w-4 h-4 text-gray-500 cursor-pointer" />
          <div className="flex items-center space-x-1 text-gray-500">
            <Image src="/Replace.png" alt="Replace" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );

  const renderDay = (day: number, label: string) => (
    <div key={day} className="mb-6">
      {/* Day Header */}
      <div
        className="flex justify-between items-center px-4 py-2 rounded text-sm font-medium mb-2"
        style={{ backgroundColor: "#cbcdeb" }}
      >
        <div>
          Day {day} - {label}
        </div>
        <div className="flex space-x-2 text-gray-500">
          <Menu className="w-4 h-4 cursor-pointer" />
          <div className="flex space-x-1 items-center">
            <Image src="/Replace.png" alt="Replace" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Table Headings */}
      <div className="grid grid-cols-8 gap-2 text-xs font-semibold text-gray-600 mb-2 px-2">
        <div>Circuits</div>
        <div className="col-span-2">Exercise</div>
        <div>Sets</div>
        <div>Reps</div>
        <div>Rest Time</div>
        <div>Notes</div>
        <div className="flex justify-between">
          <span>+</span>
          <span>Circuit</span>
        </div>
      </div>

      {/* Exercise Cards */}
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i}>{renderExerciseCard()}</div>
        ))}
      </div>
    </div>
  );

  const renderWeekContent = (week: number) => (
    <div className="space-y-6">
      {renderDay(1, "Upper Body")}
      {renderDay(2, "Lower Body")}
      {renderDay(3, "Cardio")}
      {renderDay(4, "Core")}
      {renderDay(5, "Full Body")}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className="bg-white flex items-center px-6 py-4 shadow-md"
        style={{ minHeight: "10vh", maxHeight: "80px" }}
      >
        <div className="w-50 h-30 relative mr-4">
          <Image src="/logo.png" alt="Logo" fill className="object-contain" />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Section */}
        <div className="w-[75%] pl-[15%] pr-6 py-6 border-r border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedWeek(i + 1)}
                  className={`px-4 py-2 bg-white rounded shadow cursor-pointer font-semibold ${
                    selectedWeek === i + 1 ? "text-white" : ""
                  }`}
                  style={{
                    backgroundColor:
                      selectedWeek === i + 1 ? "#6367ef" : "white",
                  }}
                >
                  Week {i + 1}
                </div>
              ))}
            </div>

            <div className="relative inline-block">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center px-4 py-2 bg-white rounded shadow"
              >
                <MoreVertical />
              </button>
              {menuOpen && (
                <div className="absolute mt-2 left-0 bg-white shadow rounded w-40 px-4 p-2 space-y-2 z-10">
                  {[
                    { label: "Duplicate", icon: Copy },
                    { label: "Rearrange", icon: Shuffle },
                    { label: "Add Rest Day", icon: Plus },
                    { label: "Delete", icon: Trash },
                  ].map(({ label, icon: Icon }, index) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between border-b ${
                        index === 3 ? "border-0" : "border-gray-200"
                      } py-2 text-gray-500 hover:text-black transition-colors`}
                    >
                      <span>{label}</span>
                      <Icon className="w-4 h-4" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {renderWeekContent(selectedWeek)}
        </div>

        {/* Right Section */}
        <div className="w-[25%] p-6 space-y-4">
          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 border border-[#6367ef] rounded text-[#6367ef]">
              Re-generate
            </button>
            <button className="px-4 py-2 bg-[#6367ef] text-white rounded">
              Export
            </button>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">
              Exercises Needed To Record (88)
            </h2>
            <input
              type="text"
              placeholder="Search exercises..."
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="space-y-2">
              {exercises.map((exercise, i) => (
                <div key={i} className="p-3 rounded border-b border-gray-200">
                  {exercise}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 shadow-md flex justify-center space-x-3">
      <button className="px-4 py-2 border border-[#6367ef] rounded text-[#6367ef]">
  Reset to Default
</button>
<button className="px-4 py-2 bg-[#6367ef] text-white rounded">
  Apply Changes
</button>

      </footer>
    </div>
  );
}
