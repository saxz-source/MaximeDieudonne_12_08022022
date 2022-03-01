import React, { useEffect, useState } from "react";
import GraphActivitiesType from "./GraphActivitiesType/GraphActivitiesType";
import GraphAverageSessions from "./GraphAverageSessions/GraphAverageSessions";
import GraphDaylyActivities from "./GraphDaylyActivities/GraphDaylyActivities";
import GraphScore from "./GraphScore/GraphScore";

const ProfileDataTemplate = ({ userId, todayScore }) => {
    // Init the screen width variable
    const [screenWidth, setScreenWidth] = useState(undefined);

    // Put a screen width listener to adjust the graph size
    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setScreenWidth(newWidth);
            console.log("updating height");
        };
        window.addEventListener("resize", updateWindowDimensions);
        return () =>
            window.removeEventListener("resize", updateWindowDimensions);
    }, []);

    return (
        <section className="profilDataTemplate">
            <GraphDaylyActivities userId={userId} screenWidth={screenWidth} />
            <div className="threeGraphs">
                <GraphActivitiesType
                    userId={userId}
                    screenWidth={screenWidth}
                />
                <GraphAverageSessions
                    userId={userId}
                    screenWidth={screenWidth}
                />
                <GraphScore
                    userId={userId}
                    screenWidth={screenWidth}
                    todayScore={todayScore}
                />
            </div>
        </section>
    );
};

export default ProfileDataTemplate;