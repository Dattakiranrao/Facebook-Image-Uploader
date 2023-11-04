import { React, useState, useEffect, useRef } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import Button from "@mui/material/Button";

export default function Main() {
  const [fileList, setFileList] = useState([]);
  const [urls, setUrls] = useState("");

  const addUrl = (e) => {
    setUrls(e.target.value);
  };

  const ddRef = useRef(null);
  const onFileDrop = (e) => {
    const files = e.target.files[0];
    // console.log(files)
    if (files) {
      const updatedList = [...fileList, files];
      setFileList(updatedList);
      // console.log(updatedList);
    }
  };
  console.log(fileList.length);
  console.log(urls);

  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div
          className="w-1/3 flex flex-col justify-center items-center"
          id="Left Side"
        >
          <div className="">
            <p className="text-2xl font-bold text-center mb-6">
              Upload an image to <br /> post to Facebook{" "}
            </p>
          </div>
          <div>
            <div>
              <div className="h-fit mb-3 border-2 border-dotted cursor-pointer">
                <div
                  ref={ddRef}
                  className="relative grid w-[200px] h-[116px] justify-center items-center hover:opacity-70 "
                >
                  <Button variant="contained">Upload Image</Button>
                  <p className="text-gray-500 text-center">or Drop A file</p>
                  <input
                    type="file"
                    className="opacity-0 absolute h-full w-full cursor-pointer"
                    // value={""}
                    onChange={onFileDrop}
                    name="uploadedFiles"
                    accept=".png, .jpg"
                    // accept=".xls,.xlsx,.txt,.csv"
                    // accept=".xls,.xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel, text/plain,.csv"
                    // accepts={[".xls", ".xlsx", ".txt", ".csv"]}
                  />
                </div>
                <div className=" flex flex-col justify-center items-center">
                  <label
                    htmlFor="input"
                    className="mb-2 text-sm flex text-gray-500 text-center"
                  >
                    Paste Image or Url Below
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setUrls(e.target.value)}
                    className="border py-[3px] mb-3 px-1 rounded border-gray-200"
                  />
                  <div className="mb-3">
                    <Button onClick={addUrl} variant="contained">
                      Add Url
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <Button
                onClick={() => setFileList([])}
                color="error"
                variant="contained"
              >
                Clear
              </Button>
            </div>
          </div>
          <div>
            <p>No Image? Try one fo these:</p>
            <div className="flex space-x-2">
              <div>image</div>
              <div>image</div>
              <div>image</div>
              <div>image</div>
            </div>
          </div>
        </div>

        <div
          className="w-1/3 flex justify-center items-center"
          id="Middle and Buttons"
        >
          <div className="flex flex-col w-64 space-y-3">
            <LoginSocialFacebook
              appId="362266746255981"
              onResolve={(response) => {
                console.log(response);
              }}
              onReject={(error) => {
                console.log(error);
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
            <button
              onClick={""}
              className={
                fileList.length > 0 || urls.length > 1
                  ? "bg-blue-500 text-white rounded-3xl border border-black px-3 py-3 text-xl"
                  : "bg-gray-300 text-black rounded-3xl border border-black px-3 py-3 text-xl"
              }
            >
              Post
            </button>
          </div>
        </div>
        <div
          className="w-1/3 flex flex-col justify-center items-center"
          id="Right Side and User Information"
        >
          <div>userinfo</div>
          <button
            onClick={""}
            className="bg-blue-500 text-white rounded-3xl border border-black px-3 py-3 text-xl"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

// <button
//   onClick={""}
//   className="bg-blue-500 text-white rounded-3xl border border-black px-3 py-3 text-xl"
// >
//   Connect to Facebook
// </button>
