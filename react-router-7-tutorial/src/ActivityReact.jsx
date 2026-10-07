import React from "react";

const ActivityReact = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-5 py-16 mt-12">

      {/* Main Container */}
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
            React Activity
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Create Your Activity
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Add a new activity and keep track of your React learning journey.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10">

          <form className="space-y-6">

            {/* Activity Name */}
            <div>
              <label
                htmlFor="activity"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Activity Name
              </label>

              <input
                id="activity"
                type="text"
                placeholder="Enter activity name..."
                className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Description
              </label>

              <textarea
                id="description"
                rows="5"
                placeholder="Write something about your activity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              ></textarea>
            </div>

            {/* Category + Date */}
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Category
                </label>

                <select
                  id="category"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-gray-300 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  <option value="">Select category</option>
                  <option value="react">React</option>
                  <option value="javascript">JavaScript</option>
                  <option value="api">API</option>
                  <option value="project">Project</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium text-gray-200"
                >
                  Date
                </label>

                <input
                  id="date"
                  type="date"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3.5 text-gray-300 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

            </div>

            {/* Progress */}
            <div>
              <label
                htmlFor="progress"
                className="mb-2 block text-sm font-medium text-gray-200"
              >
                Progress
              </label>

              <input
                id="progress"
                type="range"
                min="0"
                max="100"
                defaultValue="50"
                className="w-full accent-cyan-400"
              />

              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">

              <button
                type="submit"
                className="flex-1 rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                Add Activity
              </button>

              <button
                type="reset"
                className="rounded-xl border border-white/10 px-6 py-3.5 font-semibold text-gray-300 transition hover:border-white/20 hover:bg-white/5"
              >
                Reset
              </button>

            </div>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ActivityReact;