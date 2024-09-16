import { EXPERIENCES } from "../constants/index.js";

const Experience = () => {
  return (
    <div className="pb-4 px-4 lg:px-8">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:flex-nowrap lg:justify-start gap-4"
          >
            {/* Kolom tahun */}
            <div className="w-full lg:w-1/5">
              <p className="mb-2 text-sm text-neutral-400 text-left">
                {experience.year}
              </p>
            </div>

            {/* Kolom detail pengalaman */}
            <div className="w-full lg:w-4/5">
              <h6 className="mb-1 font-semibold text-left">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-2 text-neutral-400 text-left">
                {experience.description}
              </p>
              {/* Display technologies */}
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-1 rounded text-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
