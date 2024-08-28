/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TweetService } from "../tweet.service";
import { TweetCreateInput } from "./TweetCreateInput";
import { Tweet } from "./Tweet";
import { TweetFindManyArgs } from "./TweetFindManyArgs";
import { TweetWhereUniqueInput } from "./TweetWhereUniqueInput";
import { TweetUpdateInput } from "./TweetUpdateInput";

export class TweetControllerBase {
  constructor(protected readonly service: TweetService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tweet })
  async createTweet(@common.Body() data: TweetCreateInput): Promise<Tweet> {
    return await this.service.createTweet({
      data: data,
      select: {
        author: true,
        comments: true,
        content: true,
        createdAt: true,
        id: true,
        likes: true,
        retweets: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tweet] })
  @ApiNestedQuery(TweetFindManyArgs)
  async tweets(@common.Req() request: Request): Promise<Tweet[]> {
    const args = plainToClass(TweetFindManyArgs, request.query);
    return this.service.tweets({
      ...args,
      select: {
        author: true,
        comments: true,
        content: true,
        createdAt: true,
        id: true,
        likes: true,
        retweets: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tweet(
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Tweet | null> {
    const result = await this.service.tweet({
      where: params,
      select: {
        author: true,
        comments: true,
        content: true,
        createdAt: true,
        id: true,
        likes: true,
        retweets: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTweet(
    @common.Param() params: TweetWhereUniqueInput,
    @common.Body() data: TweetUpdateInput
  ): Promise<Tweet | null> {
    try {
      return await this.service.updateTweet({
        where: params,
        data: data,
        select: {
          author: true,
          comments: true,
          content: true,
          createdAt: true,
          id: true,
          likes: true,
          retweets: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tweet })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTweet(
    @common.Param() params: TweetWhereUniqueInput
  ): Promise<Tweet | null> {
    try {
      return await this.service.deleteTweet({
        where: params,
        select: {
          author: true,
          comments: true,
          content: true,
          createdAt: true,
          id: true,
          likes: true,
          retweets: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
