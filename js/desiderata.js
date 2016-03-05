var todoList = ["submit paper", "reschedule car repair"];
var virtues = [
	{"Compassion": "Do unto others as you would have them do unto you"},
	{"Integrity":"Do the right thing, even when no one is watching."},
	{"Excellence": "I do the very best I know how, the very best I can, and I mean to keep on doing so until the end."}
	];
var projectList = ["Evacuation Paper"];
var aphorisms = [];
var habits = [];	

$(function() {
	$(".virtue-list").sortable();
	$(".virtue-list").disableSelection();
});
