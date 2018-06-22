module Api  
  module V1 
    class EventsController < ApplicationController
      before_action :set_event, only: [:show, :destroy]

      def index
        render json: Event.all
      end

      def show
        render json: @event = Event.find(params[:id])
      end

      def create
        @event = Event.new(event_params)
        if @event.save
          render json: @event, status: 201
        else 
          render json: { errors: @event.errors.full_messages }, status: 400
        end
      end

      def destroy
        @event.destroy
        render :show, status: ok
      end

      private

      def set_event
        @event = Event.find(params[:id])
      end

      def event_params 
        params.require(:event).permit(:title)
      end

    end
  end
end
