class PinsController < InertiaController
  before_action :set_pin, only: %i[ show edit update destroy ]

  # GET /pins
  def index
    @pins = Pin.published.with_geocoded_coordinates
    render inertia: {
      pins: @pins.map do |pin|
        serialize_pin(pin)
      end
    }
  end

  # GET /pins/1
  def show
    render inertia: {
      pin: serialize_pin(@pin)
    }
  end

  # GET /pins/new
  def new
    @pin = Pin.new
    render inertia: {
      pin: serialize_pin(@pin)
    }
  end

  # GET /pins/1/edit
  def edit
    render inertia: {
      pin: serialize_pin(@pin)
    }
  end

  # POST /pins
  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      redirect_to @pin, notice: "Pin was successfully created."
    else
      redirect_to new_pin_url, inertia: { errors: @pin.errors }
    end
  end

  # PATCH/PUT /pins/1
  def update
    if @pin.update(pin_params)
      redirect_to @pin, notice: "Pin was successfully updated."
    else
      redirect_to edit_pin_url(@pin), inertia: { errors: @pin.errors }
    end
  end

  # DELETE /pins/1
  def destroy
    @pin.destroy!
    redirect_to pins_url, notice: "Pin was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pin
      @pin = Pin.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pin_params
      params.require(:pin).permit(:name, :description, :location, :published)
    end

    def serialize_pin(pin)
      pin.as_json(only: [
        :id, :name, :location, :description, :published, :latitude, :longitude
      ])
    end
end
