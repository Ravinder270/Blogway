import React, { useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import {
  deletePostAction,
  fetchPostDetailsAction,
} from "../../redux/slices/posts/postSlices";
import { useDispatch, useSelector } from "react-redux";
import DateFormatter from "../../utils/DateFormatter";
import LoadingComponent from "../../utils/LoadingComponent";
import AddComment from "../Comments/AddComment";
import CommentsList from "../Comments/CommentsList";

              {/* User */}
              <div className="inline-flex pt-14 mb-14 items-center border-t border-gray-500">
                <img
                  className="mr-8 w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                  src={postDetails?.user?.profilePhoto}
                  alt=""
                />
                <div className="text-left">
                  <Link to={`/profile/${postDetails?.user?._id}`}>
                    <h4 className="mb-1 text-2xl font-bold text-gray-50">
                      <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600 ">
                        {postDetails?.user?.firstName}{" "}
                        {postDetails?.user?.lastName}{" "}
                      </span>
                    </h4>
                  </Link>
                  <p className="text-gray-500">
                    {<DateFormatter date={post?.createdAt} />}
                  </p>
                </div>
              </div>
              {/* Post description */}
              <div class="max-w-xl mx-auto">
                <p class="mb-6 text-left  text-xl text-gray-200">
                  {postDetails?.description}

                  {/* Show delete and update  if it was created by the user */}
                  {isCreatedBy ? (
                    <p class="flex">
                      <Link to={`/update-post/${postDetails?._id}`} class="p-3">
                        <PencilAltIcon class="h-8 mt-3 text-yellow-300" />
                      </Link>
                      <button
                        onClick={() =>
                          dispatch(deletePostAction(postDetails?._id))
                        }
                        class="ml-3"
                      >
                        <TrashIcon class="h-8 mt-3 text-red-600" />
                      </button>
                    </p>
                  ) : null}
                </p>
              </div>
            </div>
          </div>
          {/* Add comment Form component here */}
          {userAuth ? <AddComment postId={id} /> : null}
          <div className="flex justify-center  items-center">
            {/* <CommentsList comments={post?.comments} postId={post?._id} /> */}
            <CommentsList comments={postDetails?.comments} />
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
