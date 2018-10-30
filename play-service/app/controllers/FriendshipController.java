package controllers;

import models.activityblueprint.ActivityBlueprintRepository;
import models.appuser.AppUser;
import models.appuser.AppUserRepository;
import models.friendship.FriendshipRepository;
import play.Logger;
import play.data.FormFactory;
import play.libs.concurrent.HttpExecutionContext;
import play.libs.ws.WSBodyReadables;
import play.libs.ws.WSBodyWritables;
import play.libs.ws.WSClient;
import play.mvc.BodyParser;
import play.mvc.Controller;
import play.mvc.Http;
import play.mvc.Result;
import utils.AppUserBodyParser;

import javax.inject.Inject;
import java.util.concurrent.CompletionStage;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class FriendshipController extends Controller implements WSBodyReadables, WSBodyWritables {

    private final WSClient ws;
    private HttpExecutionContext httpExecutionContext;

    private final FriendshipRepository friendshipRepository;

    private final Logger.ALogger appUserLogger = Logger.of("friendship");

    @Inject
    public FriendshipController(WSClient ws, HttpExecutionContext ec,
                                FriendshipRepository friendshipRepository) {
        this.ws = ws;
        this.httpExecutionContext = ec;
        this.friendshipRepository = friendshipRepository;
    }

/*
    public CompletionStage<Result> index() {
        appUserLogger.debug("calling statistics_service");
        String requestUrl = "https://jsonplaceholder.typicode.com/todos/1";
        //                   http://192.168.178.206:5000/activity/swimming

        return ws.url(requestUrl)
                .get().thenApplyAsync(answer -> {
                    ctx().flash().put("info", "Response updated!");
                    return ok("answer was " + answer.getBody(json()));
                }, httpExecutionContext.current());
    }*/

}