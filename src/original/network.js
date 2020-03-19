/* exported Network */
class Network extends Component{
	constructor(params, engine) {
		super(params, engine);
		this.sprites = {};
		if (typeof io === "undefined") {
			Debug.error('Network requires socketio.js');
		}
		this.socket = io(this.url, {
  			autoConnect: false
		});
		this.socket.on('connect', this.onConnect.bind(this));
		this.socket.on('connect_error', this.onConnectionError.bind(this));
		this.socket.on('disconnect', this.onDisconnect.bind(this));

		this.socket.on('enter_network_player', this.onEnterNetworkPlayer.bind(this));
		this.socket.on('leave_network_player', this.onLeaveNetworkPlayer.bind(this));
		this.socket.on('update_network_player', this.onUpdateNetworkPlayer.bind(this));
	}

	params() {
		return ["url", "player", "dummy"];
	}

	init() {
		this.connect();
		super.init();
	}

	move() {
		this.socket.emit('move_player', {
			x: this.player.x,
			y: this.player.y,
			id: this.socket.id
		});
	}

	draw() {

	}

	connect() {
		Debug.info(`Connecting to the server ${this.url}`);
		this.socket.connect();
	}

	disconnect() {
		Debug.warn(`Disonected from server`);
		this.socket.disconnect();
	}

	onConnect(data) {  // jshint ignore:line
		Debug.success(`Connected to the server`);
		this.socket.emit('init_player', {
			id: this.socket.id,
			x: this.player.x,
			y: this.player.y
		});
	}

	onDisconnect(data) {  // jshint ignore:line
		this.socket.disconnect();
	}

	onConnectionError(data) {  // jshint ignore:line
		Debug.warn(`Server connection error`);
		this.socket.disconnect();
	}

	createNetworkPlayer(data) {
		this.sprites[data.id] = new this.dummy({
			x: data.x,
			y: data.y,
			parent: this
		});
		this.engine.addSprite(this.sprites[data.id]);
	}

	onEnterNetworkPlayer(data) {
		this.createNetworkPlayer(data);
	}

	onLeaveNetworkPlayer(data) {
		if (typeof this.sprites[data.id] !== "undefined") {
			this.engine.removeSprite(this.sprites[data.id]);
			delete this.sprites[data.id];
		}
	}

	onUpdateNetworkPlayer(data) {
		if (typeof this.sprites[data.id] === "undefined") {
			this.createNetworkPlayer(data);
		}
		this.sprites[data.id].x = data.x;
		this.sprites[data.id].y = data.y;
	}

}
