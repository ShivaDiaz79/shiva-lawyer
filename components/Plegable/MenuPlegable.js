import React from "react";

export const MenuPlegable = () => {
  return (
    <div>
      <div className="flow-root">
        <ul className="-my-2 divide-y divide-gray-100">
          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href=""
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                >
                  Profile
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Meetings
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2">
            <ul className="space-y-1">
              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Update
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Help
                </a>
              </li>

              <li>
                <a
                  href=""
                  className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  Settings
                </a>
              </li>
            </ul>
          </li>

          <li className="py-2">
            <form action="/logout">
              <button
                type="submit"
                className="block w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
              >
                Logout
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};
